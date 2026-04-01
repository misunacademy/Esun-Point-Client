import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

    // Check for Better Auth session cookie
    const betterAuthSession = 
        // request.cookies.get('better-auth.session_token')?.value 
        request.cookies.get('__Secure-better-auth.session_token')?.value;

    if (process.env.NODE_ENV === 'development') {
        console.debug(`[Proxy] Path: ${pathname} | Better Auth Session: ${!!betterAuthSession}`);
    }

    // Protected routes that require authentication
    const protectedPaths = ['/checkout'];
    const isProtectedRoute = protectedPaths.some(path => pathname.startsWith(path));

    if (isProtectedRoute) {
        if (!betterAuthSession) {
            if (!mainFrontendUrl) {
                return NextResponse.next();
            }

            // Redirect to main-domain auth with full return URL for subdomain continuation
            const redirectBackTo = `${request.nextUrl.origin}${pathname}${request.nextUrl.search}`;
            const loginUrl = new URL('/auth/login', mainFrontendUrl);
            loginUrl.searchParams.set('redirect_url', redirectBackTo);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

// Configuration
export const config = {
    matcher: ['/checkout/:path*'],
};
