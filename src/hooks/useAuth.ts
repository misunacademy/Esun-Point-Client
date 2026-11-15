'use client';

import { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';
import { authServerApi } from '@/lib/auth-server-api';
import { baseApi } from '@/redux/api/baseApi';
import { store } from '@/redux/store';
import { toast } from 'sonner';
import type { AuthUser } from '@/types/auth';
import { getAuthErrorMessage } from '@/lib/auth-errors';
import {
  clearSession,
  fetchSessionUser,
  getErrorSnapshot,
  getLoadingSnapshot,
  getServerErrorSnapshot,
  getServerLoadingSnapshot,
  getServerSessionSnapshot,
  getServerUserSnapshot,
  getSessionSnapshot,
  getUserSnapshot,
  subscribeToSession,
} from '@/lib/auth-session';

/**
 * Subdomain auth hook.
 * Session source is centralized backend GET /api/v1/auth/me.
 * The session lives in a shared store so every consumer on a page
 * reuses one request instead of firing its own.
 */
export function useAuth() {
  const user = useSyncExternalStore(
    subscribeToSession,
    getUserSnapshot,
    getServerUserSnapshot
  );
  const session = useSyncExternalStore(
    subscribeToSession,
    getSessionSnapshot,
    getServerSessionSnapshot
  );
  const error = useSyncExternalStore(
    subscribeToSession,
    getErrorSnapshot,
    getServerErrorSnapshot
  );
  const isLoading = useSyncExternalStore(
    subscribeToSession,
    getLoadingSnapshot,
    getServerLoadingSnapshot
  );

  const isAuthenticated = !!user;

  const mainFrontendUrl = process.env.NEXT_PUBLIC_MA_FRONTEND_URL;

  const buildMainLoginUrl = useCallback((redirectUrl?: string) => {
    if (!mainFrontendUrl) {
      return '/';
    }

    const redirectTarget = redirectUrl || (typeof window !== 'undefined' ? window.location.href : undefined);
    const encoded = redirectTarget ? encodeURIComponent(redirectTarget) : '';
    return `${mainFrontendUrl}/auth/login${encoded ? `?redirect_url=${encoded}` : ''}`;
  }, [mainFrontendUrl]);

  const refetchSession = useCallback(async () => {
    return fetchSessionUser(true);
  }, []);

  useEffect(() => {
    fetchSessionUser();
  }, []);

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
      clearSession();
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
      return { success: true, error: null };
    } catch (error: unknown) {
      toast.error('Password reset failed');
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
      return { success: true, error: null };
    } catch (error: unknown) {
      toast.error('Email verification failed');
      return { success: false, error: (error as Error).message };
    }
  }, [buildMainLoginUrl]);

  const updateUserProfile = useCallback(async (data: Partial<AuthUser>) => {
    try {
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

  return useMemo(() => ({
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
  }), [
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
    verifyEmailToken,
    refetchSession,
    updateUserProfile,
  ]);
}
