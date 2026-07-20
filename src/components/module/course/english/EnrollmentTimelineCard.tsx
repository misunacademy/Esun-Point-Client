import { memo } from 'react';
import { DiamondMinus } from "lucide-react";

type TimelineProps = {
  startDate: string | null;
  endDate: string | null;
  classStart: string | null;
};

function EnrollmentTimelineCard({ startDate, endDate, classStart }: TimelineProps) {
  if (!startDate && !endDate && !classStart) return null;

  return (
    <>
      <div className="flex items-center gap-3 w-full max-w-xs mb-2 mt-2" aria-hidden="true">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40" />
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/5 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 mb-4 py-8 px-10 w-80 mx-auto md:w-[600px] lg:w-auto items-center justify-center" role="group" aria-label="Enrollment timeline">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/50 rounded-tl-2xl" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/50 rounded-tr-2xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/50 rounded-bl-2xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/50 rounded-br-2xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" aria-hidden="true" />

        {startDate && (
          <div className="flex flex-col text-center lg:text-left">
            <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Enrollment Starts</span>
            <span className="text-xl font-bold text-white">{startDate}</span>
          </div>
        )}
        {startDate && endDate && (
          <div className="flex items-center justify-center rotate-90 lg:rotate-0" aria-hidden="true">
            <DiamondMinus size={28} className="text-blue-500/50" />
          </div>
        )}
        {endDate && (
          <div className="flex flex-col text-center lg:text-left">
            <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Enrollment Ends</span>
            <span className="text-xl font-bold text-white">{endDate}</span>
          </div>
        )}
        {classStart && (
          <>
            <div className="flex items-center justify-center rotate-90 lg:rotate-0" aria-hidden="true">
              <DiamondMinus size={28} className="text-blue-500/50" />
            </div>
            <div className="flex flex-col text-center lg:text-left">
              <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Classes Start</span>
              <span className="text-xl font-bold text-white">{classStart}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default memo(EnrollmentTimelineCard);
