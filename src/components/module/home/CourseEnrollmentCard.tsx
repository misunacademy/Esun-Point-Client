'use client';

import { memo, useMemo } from 'react';
import Link from 'next/link';
import { CalendarCheck, CalendarX, ArrowRight } from "lucide-react";
import Countdown from "../course/english/Countdown";
import { FadeIn } from "../../ui/FadeIn";
import { BatchResponse, CourseInfo } from "@/redux/api/batchApi";
import { formatDate } from '@/lib/date-utils';

const themeMap: Record<string, { primary: string; glow: string }> = {
  'english-for-professional-communication': {
    primary: '217 91% 60%',
    glow: '217 91% 60%',
  }
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

  if (!batch) return null;
  if (!course) return null;

  return (
    <FadeIn delay={0.1} direction="up" style={themeVars}>
      <div style={themeVars} className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-[#060a12]
        hover:border-primary/35 hover:shadow-[0_0_40px_hsl(var(--primary)/0.12)]
        transition-all duration-500 group">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-[2rem] z-10" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-[2rem] z-10" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/15 rounded-bl-[2rem] z-10" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/15 rounded-br-[2rem] z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/4 to-transparent pointer-events-none" />

        <div className="relative z-10 p-6 md:p-8 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                bg-primary/10 border border-primary/20 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary/80 font-bangla">
                  Batch-{String(batch.title?.split(' ')[1]).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          <Countdown batch={batch} courseSlug={course.slug} serverTimestamp={serverTimestamp} />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-primary/10">
            <div className="flex gap-3 xs:gap-5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center
                  bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/20">
                  <CalendarCheck size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-base text-white/40 uppercase tracking-widest font-bangla">Start</div>
                  <div className="text-white/75 text-lg font-medium">{formatDate(batch.enrollmentStartDate)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center
                  bg-gradient-to-br from-red-500/15 to-red-500/5 rounded-lg border border-red-500/20">
                  <CalendarX size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="text-base text-white/40 uppercase tracking-widest font-bangla">End</div>
                  <div className="text-white/75 text-lg font-medium">{formatDate(batch.enrollmentEndDate)}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-baseline gap-1">
                <span className="text-primary/70 text-xs font-bangla">Fee</span>
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent text-xl font-bold font-mona tabular-nums">
                  {batch.price ? batch.price.toLocaleString('en-IN') : '--'}
                </span>
                <span className="text-primary/70 text-xs font-bangla">TK</span>
              </div>
              <Link href={`/checkout?course=${course.slug}`}>
                <div className="relative overflow-hidden flex items-center gap-1.5 px-4 py-2 rounded-xl font-bangla text-sm font-bold
                  bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary
                  hover:from-primary/30 hover:to-primary/20 hover:border-primary/50
                  hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)]
                  transition-all duration-300 group/btn cursor-pointer">
                  <span>Enroll Now</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default memo(CourseEnrollmentCard);
