"use client";

import { useEffect, useSyncExternalStore } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { getDashboardHref, getMyClassesHref } from '@/lib/auth-urls';
import type { AuthUser } from '@/types/auth';

type Role = AuthUser['role'];

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: Role[];
  fallback?: React.ReactNode;
  unauthorizedRedirectTo?: string;
}

const defaultFallback = (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

// This app has no /dashboard or /my-classes pages — role homes live on MA.
const roleHome = (role: Role): string =>
  role === 'learner' ? getMyClassesHref() : getDashboardHref(role);

const subscribeToMounted = () => () => undefined;
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

export default function ProtectedRoute({
  children,
  requiredRoles,
  fallback = defaultFallback,
  unauthorizedRedirectTo,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const isMounted = useSyncExternalStore(subscribeToMounted, getMountedSnapshot, getMountedServerSnapshot);

  useEffect(() => {
    if (!isMounted || isLoading) return;

    const role: Role | undefined = user?.role ?? undefined;

    if (!user || !role) {
      // No session OR a malformed session without a role: never default to
      // learner — send back through MA login.
      const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;
      const currentUrl = typeof window !== 'undefined'
        ? window.location.href
        : `${process.env.NEXT_PUBLIC_SITE_URL || ''}${pathname}`;

      if (mainFrontendUrl) {
        const loginUrl = new URL('/auth/login', mainFrontendUrl);
        loginUrl.searchParams.set('redirect_url', currentUrl);
        window.location.assign(loginUrl.toString());
        return;
      }

      router.replace('/');
      return;
    }

    if (requiredRoles && requiredRoles.length > 0 && (!role || !requiredRoles.includes(role))) {
      const destination = unauthorizedRedirectTo || (role ? roleHome(role) : '/');
      // Cross-app destination — full navigation, not next/router.
      window.location.assign(destination);
    }
  }, [isMounted, isLoading, user, requiredRoles, router, pathname, unauthorizedRedirectTo]);

  if (!isMounted || isLoading || !user) {
    return <>{fallback}</>;
  }

  if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
