'use client';

import { memo, useMemo } from 'react';
import { CalendarCheck, CalendarX } from 'lucide-react';
import Countdown from '../course/english/Countdown';
import { FadeIn } from '../../ui/FadeIn';
import { BatchResponse, CourseInfo } from '@/redux/api/batchApi';
import { formatDate } from '@/lib/date-utils';
import { EnrollNowButton } from '@/components/shared/EnrollNowButton';

const themeMap: Record<string, { primary: string; glow: string }> = {
  'english-for-professional-communication': {
    primary: '217 91% 60%',
    glow: '217 91% 60%',
  },
};

const getCourseInfo = (courseId: CourseInfo | string): CourseInfo | null => {
  if (typeof courseId === 'object' && courseId !== null) return courseId;
  return null;
};

function CourseEnrollmentCard({ batch, serverTimestamp }: { batch: BatchResponse | null; serverTimestamp?: number }) {
  const course = batch ? getCourseInfo(batch.courseId) : null;
  const slug = course?.slug;
  const themeVars = useMemo(() => {
    if (!slug) return {};
    const t = themeMap[slug];
    if (!t) return {};
    return {
      '--primary': t.primary,
      '--primary-glow': t.glow,
    } as React.CSSProperties;
  }, [slug]);

  if (!batch || !course) return null;

  const batchNumber = String(batch.title?.split(' ')[1] ?? '').padStart(2, '0');
  const price = batch.price ? batch.price.toLocaleString('en-IN') : '--';

  return (
    <FadeIn delay={0.1} direction="up" style={themeVars}>
      <div
        style={themeVars}
        className="group relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-surface-deep via-surface-deep to-primary/[0.035] shadow-[0_8px_32px_hsl(var(--primary)/0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_45px_hsl(var(--primary)/0.14)]"
      >
        <div className="absolute left-0 top-0 z-10 h-7 w-7 rounded-tl-[2rem] border-l-2 border-t-2 border-primary/40 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/70" />
        <div className="absolute right-0 top-0 z-10 h-7 w-7 rounded-tr-[2rem] border-r-2 border-t-2 border-primary/40 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/70" />
        <div className="absolute bottom-0 left-0 z-10 h-7 w-7 rounded-bl-[2rem] border-b-2 border-l-2 border-primary/20 transition-colors duration-300 group-hover:border-primary/45" />
        <div className="absolute bottom-0 right-0 z-10 h-7 w-7 rounded-br-[2rem] border-b-2 border-r-2 border-primary/20 transition-colors duration-300 group-hover:border-primary/45" />

        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.055] via-transparent to-primary/[0.025]" />

        <div className="relative z-10 flex flex-col gap-6 p-3 sm:p-6 md:gap-7">
          <div className="flex items-start gap-4">
            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-gradient-to-r from-primary/[0.13] to-primary/[0.045] px-3 py-1.5 shadow-[inset_0_1px_0_hsl(var(--primary)/0.08)]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.7)]" />
                </span>
                <span className="font-bangla text-xs font-bold tracking-wide text-primary-glow">
                  Batch-{batchNumber}
                </span>
              </div>
            </div>
          </div>

          <Countdown batch={batch} courseSlug={course.slug} serverTimestamp={serverTimestamp} />

          {/* <div className="flex w-fit shrink-0 items-baseline gap-1.5 self-center rounded-xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/[0.08] to-primary/[0.02] px-3.5 py-2 shadow-[0_0_20px_hsl(var(--primary)/0.10)] transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_24px_hsl(var(--primary)/0.14)]">
            <span className="font-bangla text-xl font-medium uppercase text-primary-glow sm:text-3xl">
              Course Fee:
            </span>
            <span className="font-mona text-xl font-black tracking-tight text-primary-glow tabular-nums sm:text-3xl">
              Tk {price}
            </span>
          </div> */}
          <div className="flex w-fit shrink-0 items-baseline gap-1.5 self-center relative my-4 rounded-2xl overflow-hidden border border-blue-500/25 bg-blue-500/10 shadow-[0_0_24px_hsl(217_91%_60%/0.25)]">
            <div className="relative rounded-2xl px-6 sm:px-8 py-3 font-bold text-base sm:text-lg text-white">
              Course Fee: Only <span className="text-blue-400 font-bold">
                {price}
              </span> BDT
            </div>
          </div>
          <div className="flex w-full shrink-0 items-center justify-center gap-4 sm:w-auto">
            <EnrollNowButton courseSlug={course.slug} />
          </div>

          <div className="flex flex-col items-start justify-between gap-5 border-t border-primary/15 pt-5 sm:items-center">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-gradient-to-br from-primary/[0.20] to-primary/[0.035] text-primary shadow-[0_3px_12px_hsl(var(--primary)/0.07)] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.12)]">
                  <CalendarCheck size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Starts</div>
                  <div className="mt-0.5 font-mona text-base font-semibold tracking-tight text-white sm:text-lg">
                    {formatDate(batch.enrollmentStartDate)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-400/20 bg-gradient-to-br from-red-500/[0.15] to-red-500/[0.025] text-red-400 transition-all duration-300 group-hover:border-red-400/35">
                  <CalendarX size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white/60">Ends</div>
                  <div className="mt-0.5 font-mona text-base font-semibold tracking-tight text-white sm:text-lg">
                    {formatDate(batch.enrollmentEndDate)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default memo(CourseEnrollmentCard);
