import { format } from "date-fns";

export const formatDate = (date: Date | string) => {
  return format(new Date(date), 'dd MMM, yyyy');
};

export function fmtDate(iso: string | Date | undefined): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export function isWindowOpen(start: string | Date | undefined, end: string | Date | undefined, nowMs?: number): boolean {
  if (!start || !end) return false;
  // Pass server time when available — client clocks skew enrollment windows.
  const now = typeof nowMs === 'number' ? nowMs : Date.now();
  return now >= new Date(start).getTime() && now <= new Date(end).getTime();
}

export function hasBatchStarted(start: string | Date | undefined): boolean {
  if (!start) return false;
  return Date.now() > new Date(start).getTime();
}
