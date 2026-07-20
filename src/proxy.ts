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
    return null;
  }

  return null;
}

export async function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDev = process.env.NODE_ENV === 'development';
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ''};
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set('Content-Security-Policy', cspHeader);

  const { pathname, search, origin } = request.nextUrl;
  const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

  const maintenanceResponse = await maybeRedirectToMaintenance(request);
  if (maintenanceResponse) {
    return maintenanceResponse;
  }

  const betterAuthSession = hasBetterAuthSession(request);

  if (isDev) {
    console.debug(`[proxy] Path: ${pathname} | Better Auth Session: ${betterAuthSession}`);
  }

  const isProtectedRoute = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (!isProtectedRoute || betterAuthSession) {
    return response;
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
  matcher: ['/','/checkout/:path*','/courses','/about'],
    // matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
