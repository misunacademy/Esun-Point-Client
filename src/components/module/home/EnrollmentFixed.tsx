"use client";

import { useEffect, useState } from 'react';
import { CalendarCheck, CalendarX, X } from 'lucide-react';
import { useCurrentBatch } from '@/hooks/useCurrentBatch';
import { formatDate } from '@/lib/date-utils';
import type { BatchResponse } from '@/redux/api/batchApi';

type EnrollmentFixedContentProps = {
  batch: BatchResponse;
};

function EnrollmentFixedContent({ batch }: EnrollmentFixedContentProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -25% 0px' }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const safeFormatDate = (date?: Date | string | null) => {
    if (!date) return 'তথ্য পাওয়া যায়নি';
    try {
      return formatDate(date);
    } catch {
      return 'তথ্য পাওয়া যায়নি';
    }
  };

  if (!isOpen || isFooterVisible) return null;

  return (
    <div
      data-floating-panel
      className="fixed left-3 right-3 sm:left-5 sm:right-auto sm:w-[calc(100vw-2.5rem)] max-w-[210px] sm:max-w-[344px] font-bangla text-xs sm:text-base font-medium z-[var(--z-floating)] rounded-xl border border-blue-400/25 bg-[#071225]/95 text-blue-50 shadow-[0_10px_30px_rgba(37,99,235,0.22)] backdrop-blur-md p-2.5 pr-12 sm:p-4 sm:pr-14"
    >
      <button
        type="button"
        aria-label="পপআপ বন্ধ করুন"
        onClick={() => setIsOpen(false)}
        className="absolute top-1.5 right-1.5 grid h-11 w-11 min-h-[44px] min-w-[44px] place-items-center rounded-full text-blue-100/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <X size={16} />
      </button>

      <div className="flex items-center gap-3 sm:block">
        <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CalendarCheck size={16} className="shrink-0 text-blue-400 sm:h-5 sm:w-5" aria-hidden="true" />
            <p className="truncate">
              <span className="hidden sm:inline">এনরোলমেন্ট শুরু: </span>
              <span className="sm:hidden">শুরু: </span>
              <span className="text-blue-400 font-semibold">{safeFormatDate(batch.enrollmentStartDate)}</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CalendarX size={16} className="shrink-0 text-red-400 sm:h-5 sm:w-5" aria-hidden="true" />
            <p className="truncate">
              <span className="hidden sm:inline">এনরোলমেন্ট শেষ: </span>
              <span className="sm:hidden">শেষ: </span>
              <span className="text-blue-400 font-semibold">{safeFormatDate(batch.enrollmentEndDate)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentFixed() {
  const { batch, isLoading, isError } = useCurrentBatch();

  if (isLoading || isError || !batch) return null;

  return <EnrollmentFixedContent batch={batch} />;
}
