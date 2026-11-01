
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/providers/Providers";
import { LenisProvider } from "@/providers/LenisProvider";
import ConsentAwareTracking from "@/components/analytics/ConsentAwareTracking";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import "@/bones/registry";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
  preload: false,
});

import { SITE_URL as BASE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ESUN POINT — Professional English Communication Course",
    template: "%s | ESUN POINT",
  },
  description:
    "ESUN POINT is an online learning platform focused on spoken English and professional communication skills to help learners grow confidently in career and daily life.",
  keywords: [
    "spoken english course bangladesh",
    "professional english communication",
    "esun point",
    "online english course",
    "english for career",
  ],
  authors: [{ name: "MISUN Academy", url: BASE_URL }],
  creator: "MISUN Academy",
  publisher: "MISUN Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ESUN POINT",
    title: "ESUN POINT — Professional English Communication Course",
    description:
      "Master spoken English and professional communication with ESUN POINT. Expert mentorship, live classes, and lifetime access.",
    images: [
      {
        url: `${BASE_URL}/preview/default-og-image.png`,
        width: 1200,
        height: 630,
        alt: "ESUN POINT — Professional English Communication Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESUN POINT — Professional English Communication Course",
    description:
      "Master spoken English and professional communication with ESUN POINT.",
    images: [`${BASE_URL}/preview/default-og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en" className={hindSiliguri.variable}>
      <head>
        {/* Load GA script only if GA_ID is available */}

        {/* Organization + WebSite JSON-LD Structured Data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "MISUN Academy",
                alternateName: "ESUN POINT",
                url: process.env.NEXT_PUBLIC_SITE_URL,
                logo: `${process.env.NEXT_PUBLIC_SITE_URL}/preview/default-og-image.png`,
                description:
                  "ESUN POINT is an online learning platform offering professional English communication courses in Bangladesh.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "85, Sultan Ahmed Road, Moulavipara, Ward No. 27",
                  addressLocality: "Khulna",
                  addressCountry: "BD",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+88-01778371211",
                  contactType: "customer service",
                  email: "misunacademybd@gmail.com",
                  areaServed: "BD",
                  availableLanguage: ["Bengali", "English"],
                },
                sameAs: [
                  "https://www.facebook.com/esunpoint",
                  "https://www.youtube.com/@EsunPoint",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "ESUN POINT",
                url: process.env.NEXT_PUBLIC_SITE_URL,
                description:
                  "Professional English communication courses by MISUN Academy.",
                publisher: {
                  "@type": "Organization",
                  name: "MISUN Academy",
                },
              },
            ]),
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className="">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none">
          Skip to main content
        </a>
        <Providers>
          {/* Marketing tracking (Pixel + GA) loads only after opt-in */}
          <ConsentAwareTracking pixelId={pixelId} gaId={GA_ID} />
          <ConsentBanner />

          {/* Vercel Analytics (Vercel hosting only — the script 404s on
              self-hosted/Docker deployments) */}
          {process.env.VERCEL ? <Analytics /> : null}

          <LenisProvider>
            {children}
          </LenisProvider>

          

 
        </Providers>
      </body>
    </html>
  );
}
