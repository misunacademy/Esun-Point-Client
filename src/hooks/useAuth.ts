import { authServerApi } from '@/lib/auth-server-api';
import { baseApi } from '@/redux/api/baseApi';
import { store } from '@/redux/store';
import { toast } from 'sonner';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { AuthUser } from '@/types/auth';
import { getAuthErrorMessage } from '@/lib/auth-errors';

/**
 * Subdomain auth hook.
 * Session source is centralized backend GET /api/v1/auth/me.
 * Subdomain must not perform local sign-in/sign-up flows.
 */
export function useAuth() {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

  const session = useMemo(() => (user ? { user } : null), [user]);
  const isAuthenticated = !!user;

  const buildMainLoginUrl = useCallback((redirectUrl?: string) => {
    if (!mainFrontendUrl) {
      return '/';
    }

    const redirectTarget = redirectUrl || (typeof window !== 'undefined' ? window.location.href : undefined);
    const encoded = redirectTarget ? encodeURIComponent(redirectTarget) : '';
    return `${mainFrontendUrl}/auth/login${encoded ? `?redirect_url=${encoded}` : ''}`;
  }, [mainFrontendUrl]);

  const refetchSession = useCallback(async () => {
    if (!baseApiUrl) {
      setUser(undefined);
      setError(new Error('Missing NEXT_PUBLIC_BASE_API_URL'));
      setIsLoading(false);
      return null;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${baseApiUrl}/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.status === 401) {
        setUser(undefined);
        setError(null);
        setIsLoading(false);
        return null;
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch auth user: ${response.status}`);
      }

      const payload = await response.json();
      const nextUser = payload?.data?.user as AuthUser | undefined;
      setUser(nextUser);
      setError(null);
      return nextUser || null;
    } catch (err) {
      // Transient blip (500/timeout/offline): keep the last known user and
      // surface the error — never render a logged-in user as logged-out.
      setError(err as Error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [baseApiUrl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      refetchSession();
    }, 0);
    return () => clearTimeout(timer);
  }, [refetchSession]);

  /**
   * Subdomain login must be handled on main domain.
   */
  const signIn = useCallback(async (_email: string, _password: string, redirectUrl?: string) => {
    try {
      const loginUrl = buildMainLoginUrl(redirectUrl);
      if (typeof window !== 'undefined') {
        window.location.assign(loginUrl);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const signUp = useCallback(async () => {
    try {
      const loginUrl = buildMainLoginUrl();
      if (typeof window !== 'undefined') {
        window.location.assign(loginUrl);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const signOut = useCallback(async () => {
    try {
      const result = await authServerApi.signOut();
      if (result.error) {
        throw new Error(result.error.message);
      }
      setUser(undefined);
      store.dispatch(baseApi.util.resetApiState());
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      return { success: true };
    } catch (error: unknown) {
      toast.error('Logout failed');
      return { success: false, error: (error as Error).message };
    }
  }, []);

  const signInWithGoogle = useCallback(async (redirectUrl?: string) => {
    try {
      const loginUrl = buildMainLoginUrl(redirectUrl);
      if (typeof window !== 'undefined') {
        window.location.assign(loginUrl);
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      // Reset UI lives on MA (this app has no /reset-password page).
      const maBase = process.env.NEXT_PUBLIC_MA_FRONTEND_URL || 'https://www.misun-academy.com';
      const result = await authServerApi.requestPasswordReset({
        email,
        redirectTo: `${maBase}/reset-password`,
      });

      if (result.error) {
        const errorMsg = result.error.message || 'Failed to send reset email';
        toast.error(errorMsg);
        return { success: false, error: errorMsg };
      }

      toast.success('Password reset email sent! Check your inbox.');
      return { success: true, error: null };
    } catch (error) {
      const errorMsg = (error as Error).message || 'Failed to send reset email';
      toast.error(errorMsg);
      return { success: false, error: errorMsg };
    }
  }, []);

  const resetPassword = useCallback(async (newPassword: string, token: string) => {
    try {
      const result = await authServerApi.resetPassword({
        newPassword,
        token,
      });

      if (result.error) {
        const errorMsg = getAuthErrorMessage(result.error.code, result.error.message);
        toast.error(errorMsg);
        return { success: false, error: errorMsg };
      }

      toast.success('Password reset successful! You can now log in.');
      if (typeof window !== 'undefined') {
        window.location.assign(buildMainLoginUrl());
      }
      return { success: true };
    } catch (error: unknown) {
      toast.error('Failed to reset password');
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const verifyEmailToken = useCallback(async (token: string) => {
    try {
      const result = await authServerApi.verifyEmail(token);

      if (result.error) {
        const errorMsg = getAuthErrorMessage(result.error.code, result.error.message);
        toast.error(errorMsg);
        return { success: false, error: errorMsg };
      }

      toast.success('Email verified successfully! You can now log in.');
      if (typeof window !== 'undefined') {
        window.location.assign(buildMainLoginUrl());
      }
      return { success: true };
    } catch (error: unknown) {
      toast.error('Email verification failed');
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const updateUserProfile = useCallback(async (data: Partial<AuthUser>) => {
    try {
      // Client-side allowlist (server enforces input:false too): never
      // forward role/status even if a caller passes a full user object.
      const { name, image, phone, address, avatar } = data;
      const result = await authServerApi.updateUser({
        ...(name !== undefined ? { name } : {}),
        ...(image !== undefined ? { image } : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(address !== undefined ? { address } : {}),
        ...(avatar !== undefined ? { avatar } : {}),
      } as Record<string, unknown>);

      if (result.error) {
        return { success: false, error: result.error.message };
      }

      await refetchSession();

      return { success: true, data: result.data };
    } catch (error: unknown) {
      return { success: false, error: (error as Error).message };
    }
  }, [refetchSession]);

  return {
    user,
    session,
    isAuthenticated,
    isLoading,
    error,

    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
    verifyEmail: verifyEmailToken,

    refetchSession,

    updateUserProfile,
  };
}