const MA_FRONTEND_URL = process.env.NEXT_PUBLIC_MA_FRONTEND_URL || '';
const EP_FRONTEND_URL = process.env.NEXT_PUBLIC_EP_FRONTEND_URL || '';

export function getLoginHref(): string {
  const redirectBackUrl = EP_FRONTEND_URL;
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
  return `${MA_FRONTEND_URL}/`;
}

export function canSeeClasses(role: string | undefined | null): boolean {
  return !!role && role.toLowerCase() === 'learner';
}

export function isAdminRole(role: string | undefined | null): boolean {
  if (!role) return false;
  const r = role.toLowerCase();
  return r === 'admin' || r === 'superadmin' || r === 'instructor' || r === 'employee';
}
