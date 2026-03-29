"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
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
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500" />
  </div>
);

const roleHome: Record<Role, string> = {
  superadmin: '/dashboard/admin',
  admin: '/dashboard/admin',
  instructor: '/dashboard/instructor',
  learner: '/my-classes',
};

export default function ProtectedRoute({
  children,
  requiredRoles,
  fallback = defaultFallback,
  unauthorizedRedirectTo,
}: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    const role: Role = user?.role ?? 'learner';

    if (!user) {
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

    if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      // Keep /dashboard/student as temporary legacy fallback until route removal.
      const destination = unauthorizedRedirectTo || roleHome[role] || '/my-classes' || '/dashboard/student';
      router.replace(destination);
    }
  }, [isLoading, user, requiredRoles, router, pathname, unauthorizedRedirectTo]);

  if (isLoading || !user) {
    return <>{fallback}</>;
  }

  if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
