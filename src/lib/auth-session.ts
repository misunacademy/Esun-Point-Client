'use client';

import type { AuthUser } from '@/types/auth';

type Listener = () => void;

const listeners = new Set<Listener>();

const CACHE_TTL_MS = 30_000;

let user: AuthUser | undefined = undefined;
let session: { user: AuthUser } | null = null;
let error: Error | null = null;
let isLoading = true;
let hasFetched = false;
let lastFetchedAt = 0;
let inFlight: Promise<AuthUser | null> | null = null;

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeToSession(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getUserSnapshot(): AuthUser | undefined {
  return user;
}

export function getSessionSnapshot(): { user: AuthUser } | null {
  return session;
}

export function getErrorSnapshot(): Error | null {
  return error;
}

export function getLoadingSnapshot(): boolean {
  return isLoading;
}

export function getServerUserSnapshot(): AuthUser | undefined {
  return undefined;
}

export function getServerSessionSnapshot(): { user: AuthUser } | null {
  return null;
}

export function getServerErrorSnapshot(): Error | null {
  return null;
}

export function getServerLoadingSnapshot(): boolean {
  return true;
}

export function setSessionUser(next: AuthUser | undefined) {
  user = next;
  session = next ? { user: next } : null;
  error = null;
  emit();
}

export function clearSession() {
  user = undefined;
  session = null;
  error = null;
  inFlight = null;
  hasFetched = true;
  emit();
}

export function fetchSessionUser(force = false): Promise<AuthUser | null> {
  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  if (!baseApiUrl) {
    user = undefined;
    session = null;
    error = new Error('Missing NEXT_PUBLIC_BASE_API_URL');
    isLoading = false;
    hasFetched = true;
    emit();
    return Promise.resolve(null);
  }

  if (inFlight) return inFlight;

  if (!force && hasFetched && Date.now() - lastFetchedAt < CACHE_TTL_MS) {
    return Promise.resolve(session?.user ?? null);
  }

  isLoading = true;
  emit();

  inFlight = (async () => {
    try {
      const response = await fetch(`${baseApiUrl}/auth/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.status === 401) {
        user = undefined;
        session = null;
        error = null;
        isLoading = false;
        hasFetched = true;
        lastFetchedAt = Date.now();
        emit();
        return null;
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch auth user: ${response.status}`);
      }

      const payload = await response.json();
      const nextUser = payload?.data?.user as AuthUser | undefined;
      user = nextUser;
      session = nextUser ? { user: nextUser } : null;
      error = null;
      isLoading = false;
      hasFetched = true;
      lastFetchedAt = Date.now();
      emit();
      return nextUser ?? null;
    } catch (err) {
      // Transient blip (500/timeout/offline): keep the last known user and
      // surface the error — never render a logged-in user as logged-out.
      error = err as Error;
      isLoading = false;
      hasFetched = true;
      lastFetchedAt = Date.now();
      emit();
      return null;
    } finally {
      inFlight = null;
    }
  })();

  return inFlight;
}
