'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { fmtDate, isWindowOpen, hasBatchStarted } from '@/lib/date-utils';
function CourseEnrollmentCard({
  courseData,
  batchData,
  courseSlug,
}: {
  courseData: { title?: string; price?: number } | undefined;
  batchData: { title?: string; enrollmentStartDate?: Date; enrollmentEndDate?: Date; price?: number } | undefined;
  courseSlug: string;
}) {
  const courseName = courseData?.title;
  const batchTitle = batchData?.title;
  const start = batchData?.enrollmentStartDate;
  const end = batchData?.enrollmentEndDate;
  const fee = batchData?.price ?? courseData?.price ?? 0;
  const hasStarted = hasBatchStarted(start);
  const isOpen = isWindowOpen(start, end);

  if (!courseName) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
      <div className="px-4 pt-4 pb-3 border-b border-white/8">
        <p className="text-xs text-yellow-400/70 uppercase tracking-widest mb-0.5">Course</p>
        <p className="font-bold text-white/90 text-sm leading-snug">{courseName}</p>
        {batchTitle && <p className="text-xs text-primary/70 mt-1">{batchTitle}</p>}
      </div>
      <div className="p-4 space-y-2">
        {start && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 shrink-0 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center">
              <Calendar className="h-3.5 w-3.5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-primary/70">Enrollment Starts</p>
              <p className="text-sm font-bold text-white/90">{fmtDate(start)}</p>
            </div>
          </div>
        )}
        {end && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 shrink-0 rounded-lg bg-red-500/10 border border-red-500/25 flex items-center justify-center">
              <Clock className="h-3.5 w-3.5 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-red-400/70">Enrollment Ends</p>
              <p className="text-sm font-bold text-white/90">{fmtDate(end)}</p>
            </div>
          </div>
        )}
        {!start && !end && (
          <p className="text-xs text-white/40 italic">Enrollment dates will be announced soon.</p>
        )}
        {fee > 0 && (
          <div className="flex items-center justify-between pt-1 border-t border-white/8 mt-2">
            <span className="text-xs text-white/50">Course Fee</span>
            <span className="text-sm font-bold text-primary">TK{fee}</span>
          </div>
        )}
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mt-1 ${isOpen
          ? 'bg-primary/15 text-primary border border-primary/25'
          : hasStarted ? 'bg-red-500/15 text-red-400 border border-red-500/25' : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/25'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? 'bg-primary' : hasStarted ? 'bg-red-400' : 'bg-yellow-400'}`} />
          {isOpen ? 'Enrollment Ongoing' : hasStarted ? 'Enrollment Ended' : 'Coming Soon'}
        </div>

        {isOpen && (
          <div className="mt-3 relative group">
            <div className="absolute inset-0 rounded-xl blur-md opacity-50 animate-pulse"
              style={{ background: 'radial-gradient(ellipse at center, hsl(217 80% 70% / 0.5) 0%, transparent 70%)' }} />
            <div className="relative p-[1.5px] rounded-xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_24px_6px_hsl(217_91%_60%/0.45)] shadow-[0_0_14px_2px_hsl(217_91%_60%/0.3)]">
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]"
                style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 22%, hsl(217 60% 45% / 0.4) 34%, hsl(217 91% 60%) 44%, hsl(217 85% 75%) 50%, hsl(0 0% 100% / 0.9) 53%, hsl(217 85% 75%) 56%, hsl(217 91% 60%) 62%, hsl(217 60% 45% / 0.3) 74%, transparent 84%)' }} />
              <Link href={`/checkout?course=${courseSlug}`}
                className="relative z-10 flex items-center justify-center gap-2.5 w-full py-3 rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-[1px]"
                style={{ background: 'linear-gradient(135deg, hsl(217 30% 7%) 0%, hsl(217 25% 11%) 50%, hsl(217 20% 8%) 100%)' }}>
                <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(105deg, transparent 35%, hsl(217 91% 75% / 0.15) 50%, transparent 65%)' }} />
                <span className="relative flex h-[7px] w-[7px] shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ backgroundColor: 'hsl(217 91% 70%)' }} />
                  <span className="relative inline-flex rounded-full h-[7px] w-[7px]" style={{ backgroundColor: 'hsl(217 91% 75%)' }} />
                </span>
                <span className="relative text-sm font-bold tracking-wide font-mona"
                  style={{ background: 'linear-gradient(90deg, hsl(217 91% 70%) 0%, hsl(217 85% 82%) 50%, hsl(217 91% 70%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Enroll Now
                </span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 shrink-0" style={{ color: 'hsl(217 85% 75%)' }} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(CourseEnrollmentCard);
