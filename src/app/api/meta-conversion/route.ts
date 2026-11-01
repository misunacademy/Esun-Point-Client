import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { z } from "zod";

const conversionEventSchema = z.object({
  eventName: z.string().default("Purchase"),
  email: z.string().email().optional().or(z.literal("")),
  value: z.number().optional(),
  currency: z.string().default("BDT"),
  eventId: z.string().optional(),
});

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 30;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();

    const validatedData = conversionEventSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request data",
          errors: validatedData.error.flatten()
        },
        { status: 400 }
      );
    }

    const {
      eventName,
      email,
      value,
      currency,
      eventId,
    } = validatedData.data;

    const normalizedEmail = email?.trim().toLowerCase();
    const hashedEmail = normalizedEmail
      ? crypto.createHash("sha256").update(normalizedEmail).digest("hex")
      : undefined;

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          user_data: {
            em: hashedEmail ? [hashedEmail] : undefined,
            client_ip_address: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || undefined,
            client_user_agent: req.headers.get("user-agent"),
          },
          custom_data: {
            value,
            currency,
          },
        },
      ],
    };

    const pixelId = process.env.META_PIXEL_ID;
    const capiToken = process.env.META_CAPI_TOKEN;

    if (!pixelId || !capiToken) {
      console.error("Meta Pixel configuration missing");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${capiToken}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta API error:", response.status);
      return NextResponse.json(
        { success: false, message: "Failed to send event to Meta" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Meta conversion API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
