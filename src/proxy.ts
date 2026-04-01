
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

const PROTECTED_PATHS = ['/checkout'] as const;

export function proxy(request: NextRequest) {
  const { pathname, search, origin } = request.nextUrl;
  const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

  //  Use BetterAuth helper (much more reliable than manual cookie check)
  const betterAuthSession = Boolean(getSessionCookie(request));

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[proxy] Path: ${pathname} | Better Auth Session: ${betterAuthSession}`);
  }

  // Protected route check (kept for clarity, though matcher already limits it)
  const isProtectedRoute = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (!isProtectedRoute || betterAuthSession) {
    return NextResponse.next();
  }

  if (!mainFrontendUrl) {
    console.error('Missing NEXT_PUBLIC_MA_FRONTEND_URL. Redirecting to local home to avoid fail-open on protected routes.');
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Redirect to main domain auth with full return URL (subdomain -> main domain flow)
    const redirectBackTo = `${origin}${pathname}${search}`;
    const loginUrl = new URL('/auth/login', mainFrontendUrl);
    loginUrl.searchParams.set('redirect_url', redirectBackTo);

    return NextResponse.redirect(loginUrl);
  } catch {
    console.error('Invalid NEXT_PUBLIC_MA_FRONTEND_URL. Redirecting to local home to avoid fail-open on protected routes.');
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/checkout/:path*'],
};