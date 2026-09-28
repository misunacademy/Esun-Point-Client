const MA_FRONTEND_URL = process.env.NEXT_PUBLIC_MA_FRONTEND_URL || '';
const EP_FRONTEND_URL = process.env.NEXT_PUBLIC_EP_FRONTEND_URL || '';

export function getLoginHref(redirectBack?: string): string {
  // Fail safe: without a configured MA origin there is no login to link to
  // (a same-origin /auth/login would 404 on this app).
  if (!MA_FRONTEND_URL) return '/';
  const redirectBackUrl = redirectBack ?? EP_FRONTEND_URL;
  return `${MA_FRONTEND_URL}/auth/login?redirect_url=${encodeURIComponent(redirectBackUrl)}`;
}

export function getProfileHref(): string {
  return `${MA_FRONTEND_URL}/profile`;
}

export function getMyClassesHref(): string {
  return `${MA_FRONTEND_URL}/my-classes`;
}

export function getDashboardHref(role: string): string {
  const segment = role === 'superadmin' || role === 'admin' ? 'admin' : role;
  return `${MA_FRONTEND_URL}/dashboard/${segment}`;
}

export function getEnrollmentPostersHref(): string {
  return `${MA_FRONTEND_URL}/enrollment-posters`;
}

export function getCertificatesHref(): string {
  return `${MA_FRONTEND_URL}/my-classes/certificates`;
}

export function getGraphicDesignHref(): string {
  // The graphic-design course lives on MA; never link a bare origin here
  // (a missing env would produce an "undefined" href).
  if (!MA_FRONTEND_URL) return '/courses';
  return `${MA_FRONTEND_URL}/courses/complete-graphic-design-with-freelancing`;
}

export function canSeeClasses(role: string | undefined | null): boolean {
  return !!role && role.toLowerCase() === 'learner';
}

export function isAdminRole(role: string | undefined | null): boolean {
  if (!role) return false;
  const r = role.toLowerCase();
  return r === 'admin' || r === 'superadmin' || r === 'instructor' || r === 'employee';
}
