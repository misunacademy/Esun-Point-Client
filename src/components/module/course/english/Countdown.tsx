"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { useGetCurrentEnrollmentBatchQuery } from "@/redux/api/batchApi";
import { useGetCourseBySlugQuery } from "@/redux/api/courseApi";
import { intervalToDuration, isBefore, isAfter } from "date-fns";
import { FadeIn } from '@/components/ui/FadeIn';
import { BatchResponse, CourseInfo } from '@/redux/api/batchApi';
import { SkeletonWrapper } from '@/components/ui/skeleton-wrapper';

type TimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// ── Sub-components declared outside to avoid "created during render" error ───

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center
      bg-surface border border-primary/20 rounded-2xl
      flex-1 basis-0 min-w-0 max-w-[6rem] h-24 sm:h-28
      px-1 py-2 sm:px-2.5
      shadow-[0_8px_32px_hsl(217_91%_60%/0.15)]
      transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 group"
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40 rounded-tr-2xl" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 text-[2rem] leading-none sm:text-5xl font-bold font-mona tabular-nums text-primary-glow">
        {String(value).padStart(2, '0')}
      </div>
      <div className="relative z-10 text-[8px] sm:text-[11px] text-white/70 mt-1.5 sm:mt-2 tracking-[0.02em] sm:tracking-[0.12em] uppercase whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <div className="hidden sm:flex flex-col gap-2 animate-pulse pb-6">
      <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(217_91%_60%)]" />
      <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_hsl(217_91%_60%)]" />
    </div>
  );
}

interface CountdownProps {
  /** Pass a pre-fetched batch object directly (e.g. from EnrollmentSection) */
  batch?: BatchResponse | null;
  /** OR pass a course slug to auto-resolve the current enrollment batch */
  courseSlug?: string;
  /** Server timestamp for accurate clock-drift-free countdown */
  serverTimestamp?: number;
}

// map of course slug → primary colors (HSL) used by CSS vars
const themeMap: Record<string, { primary: string; glow: string }> = {
  'english-for-professional-communication': {
    primary: '217 91% 60%',
    glow: '217 91% 60%',
  },
  'graphic-design': {
    primary: '217 91% 60%',
    glow: '217 85% 75%',
  },
};

const Countdown = ({ batch: batchProp, courseSlug, serverTimestamp: serverTimestampProp }: CountdownProps = {}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [label, setLabel] = useState<string>('');
  const clientReceivedAt = useRef<number>(0);

  // ── Course-slug path (course detail pages & BannerSection) ───────────────
  const { data: courseBySlug, isLoading: courseBySlugLoading } = useGetCourseBySlugQuery(
    courseSlug!, { skip: !courseSlug || !!batchProp }
  );
  const slugCourseId = courseSlug && !batchProp ? (courseBySlug?.data as { _id?: string } | undefined)?._id : undefined;

  const { data: slugBatchRes, isLoading: slugBatchLoading } = useGetCurrentEnrollmentBatchQuery(
    { courseId: slugCourseId },
    { skip: !slugCourseId || !!batchProp }
  );

  const batch = batchProp ?? (courseSlug ? (slugBatchRes?.data as BatchResponse | null | undefined) : null);
  const serverTimestamp = serverTimestampProp ?? slugBatchRes?.serverTimestamp;

  const effectiveSlug = useMemo(() => {
    if (courseSlug) return courseSlug;
    if (batch && typeof batch.courseId === 'object' && 'slug' in batch.courseId) {
      return (batch.courseId as CourseInfo).slug;
    }
    return undefined;
  }, [courseSlug, batch]);

  // compute CSS variable overrides based on slug
  const themeVars = useMemo(() => {
    if (!effectiveSlug) return {};
    const t = themeMap[effectiveSlug];
    if (!t) return {};
    return {
      '--primary': t.primary,
      '--primary-glow': t.glow,
    } as React.CSSProperties;
  }, [effectiveSlug]);

  const enrollmentStart = useMemo(() => batch?.enrollmentStartDate ? new Date(batch.enrollmentStartDate) : null, [batch]);
  const enrollmentEnd = useMemo(() => batch?.enrollmentEndDate ? new Date(batch.enrollmentEndDate) : null, [batch]);

  useEffect(() => {
    if (!batch || !enrollmentStart || !enrollmentEnd) return;

    if (clientReceivedAt.current === 0) {
      clientReceivedAt.current = Date.now();
    }

    const offset = serverTimestamp ? serverTimestamp - clientReceivedAt.current : 0;

    const tick = () => {
      const now = new Date(Date.now() + offset);
      const batchStatus = batch.status as string;

      let targetDate: Date | null = null;
      let nextLabel = '';

      if (batchStatus === 'upcoming') {
        const enrollmentOpen = isAfter(now, enrollmentStart) && isBefore(now, enrollmentEnd);
        const enrollmentNotYetOpen = isBefore(now, enrollmentStart);

        if (enrollmentOpen) {
          // Enrollment window is currently open → count down to its end
          targetDate = enrollmentEnd;
          nextLabel = 'Enrollment ends in';
        } else if (enrollmentNotYetOpen) {
          // Enrollment hasn't started yet → count down to its start
          targetDate = enrollmentStart;
          nextLabel = 'Enrollment starts in';
        }
        // If past enrollmentEnd and still "upcoming", nothing to show
      } else if (batchStatus === 'running') {
        // The batch is running — show enrollment end countdown only if still within window
        if (isBefore(now, enrollmentEnd)) {
          targetDate = enrollmentEnd;
          nextLabel = 'Enrollment ends in';
        }
      }

      if (targetDate) {
        const duration = intervalToDuration({ start: now, end: targetDate });
        setTimeLeft({
          months: duration.months || 0,
          days: duration.days || 0,
          hours: duration.hours || 0,
          minutes: duration.minutes || 0,
          seconds: duration.seconds || 0,
        });
        setLabel(nextLabel);
      } else {
        setTimeLeft(null);
        setLabel('');
      }
    };

    tick(); // run immediately
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [batch, enrollmentStart, enrollmentEnd, serverTimestamp]);

  const isCountdownLoading = courseSlug
    ? (courseBySlugLoading || (!!slugCourseId && slugBatchLoading))
    : false;

  return (
    <SkeletonWrapper loading={isCountdownLoading} className="min-h-[200px]">
      {!batch || !timeLeft || !label ? null : (
      <FadeIn delay={0.1} className="mt-8 mb-4 w-full" style={themeVars}>
        <div className="text-center space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full
            bg-primary/10 border border-primary/25 backdrop-blur-sm
            shadow-[0_0_20px_hsl(217_91%_60%/0.12)]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <p className="text-xs font-semibold  uppercase text-primary">
              {label}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-1 sm:gap-3">
            {timeLeft.months > 0 && (
              <>
                <TimeBlock value={timeLeft.months} label="Months" />
                <Colon />
              </>
            )}
            <TimeBlock value={timeLeft.days} label="Days" />
            <Colon />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <Colon />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <Colon />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </FadeIn>
      )}
    </SkeletonWrapper>
  );
};

export default Countdown;