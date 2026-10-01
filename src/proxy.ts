import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

const PROTECTED_PATHS = ['/checkout'] as const;
const MAINTENANCE_ALLOWLIST_PREFIXES = [
  '/maintenance',
  '/dashboard',
  '/auth',
  '/api',
] as const;

const MAINTENANCE_ALLOWLIST_EXACT = new Set([
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-0.xml',
]);
const BETTER_AUTH_COOKIE_KEYS = [
  'better-auth.session_token',
  '__Secure-better-auth.session_token',
  'better-auth.session_token.0',
  '__Secure-better-auth.session_token.0',
] as const;

function hasBetterAuthSession(request: NextRequest): boolean {
  // Best-effort presence check only: HttpOnly/SameSite session cookies issued
  // for the API domain are invisible here, so a missing cookie must redirect
  // to MA login (which bounces straight back when the session is valid).
  // Never treat a present-but-unverified cookie as proof of identity —
  // real auth is enforced by requireAuth on the API + ProtectedRoute.
  if (getSessionCookie(request)) {
    return true;
  }

  for (const key of BETTER_AUTH_COOKIE_KEYS) {
    if (request.cookies.get(key)?.value) {
      return true;
    }
  }

  return false;
}

function isMaintenanceAllowlisted(pathname: string) {
  if (MAINTENANCE_ALLOWLIST_EXACT.has(pathname)) return true;
  return MAINTENANCE_ALLOWLIST_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

async function maybeRedirectToMaintenance(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isMaintenanceAllowlisted(pathname)) {
    return null;
  }

  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  if (!baseApiUrl) {
    return null;
  }

  try {
    const response = await fetch(`${baseApiUrl}/settings`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const maintenanceEnabled = payload?.data?.maintenanceEnabled === true;

    if (maintenanceEnabled) {
      const url = request.nextUrl.clone();
      url.pathname = '/maintenance';
      url.search = '';
      return NextResponse.redirect(url);
    }
  } catch {
    // Fail-open by design: if the API is unreachable we must not 500 the
    // whole storefront. Maintenance simply stays off until reachable again.
    return null;
  }

  return null;
}

export async function proxy(request: NextRequest) {
  const { pathname, search, origin } = request.nextUrl;
  const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

  const maintenanceResponse = await maybeRedirectToMaintenance(request);
  if (maintenanceResponse) {
    return maintenanceResponse;
  }

  const betterAuthSession = hasBetterAuthSession(request);

  const isProtectedRoute = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (!isProtectedRoute || betterAuthSession) {
    return NextResponse.next();
  }

  if (!mainFrontendUrl) {
    console.error('Missing NEXT_PUBLIC_MA_FRONTEND_URL. Redirecting to local home.');
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    const redirectBackTo = `${origin}${pathname}${search}`;
    const loginUrl = new URL('/auth/login', mainFrontendUrl);
    loginUrl.searchParams.set('redirect_url', redirectBackTo);

    return NextResponse.redirect(loginUrl);
  } catch {
    console.error('Invalid NEXT_PUBLIC_MA_FRONTEND_URL. Redirecting to local home.');
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  // Cover every app route for the maintenance gate (checkout guard is
  // path-checked inside proxy); exclude API/static/assets explicitly.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.*|.*\\..*).*)'],
};
