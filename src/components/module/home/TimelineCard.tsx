'use client';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Feature } from '@/constants/whyUs';

interface TimelineCardProps {
  feature: Feature;
  Icon: LucideIcon;
  isEven: boolean;
  isActive: boolean;
  isPassed: boolean;
}

export default function TimelineCard({
  feature,
  Icon,
  isEven,
  isActive,
  isPassed,
}: TimelineCardProps) {
  return (
    <div
      data-timeline-anchor
      className={cn(
        "group relative w-full md:max-w-[440px] rounded-3xl p-6 sm:p-7 pt-9 transition-all duration-500 ease-out cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep",
        isActive
          ? "bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 text-white shadow-[0_16px_50px_rgba(59,130,246,0.45)] ring-2 ring-blue-400/60 scale-[1.02] z-20"
          : isPassed
          ? "bg-[#081226] border border-blue-500/25 text-white/90 shadow-lg hover:border-blue-500/40 opacity-95"
          : "bg-surface-deep/70 border border-white/5 opacity-40 hover:opacity-75 transition-opacity"
      )}
    >
      <div
        className={cn(
          "absolute -top-6 left-8 sm:left-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md",
          isActive
            ? "bg-white/10 text-blue-700 shadow-blue-900/40 scale-110"
            : isPassed
            ? "bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600 text-white shadow-blue-500/30"
            : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
        )}
      >
        <Icon className="w-6 h-6" />
      </div>

      {isEven ? (
        <div
          className={cn(
            "hidden md:block absolute left-[100%] top-1/2 -translate-y-1/2 w-3 md:w-4 border-t-2 border-dashed transition-all duration-500 pointer-events-none",
            isActive
              ? "border-blue-400 opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              : isPassed
              ? "border-blue-500/40 opacity-70"
              : "border-blue-500/20 opacity-30"
          )}
        />
      ) : (
        <div
          className={cn(
            "hidden md:block absolute right-[100%] top-1/2 -translate-y-1/2 w-3 md:w-4 border-t-2 border-dashed transition-all duration-500 pointer-events-none",
            isActive
              ? "border-blue-400 opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              : isPassed
              ? "border-blue-500/40 opacity-70"
              : "border-blue-500/20 opacity-30"
          )}
        />
      )}

      <div
        className={cn(
          "md:hidden absolute -left-9 top-1/2 -translate-y-1/2 w-9 border-t-2 border-dashed transition-all duration-500 pointer-events-none",
          isActive
            ? "border-blue-400 opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            : isPassed
            ? "border-blue-500/40 opacity-70"
            : "border-blue-500/20 opacity-30"
        )}
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <h3
            className={cn(
              "font-bold text-base sm:text-lg leading-snug transition-colors duration-300",
              isActive ? "text-white" : "text-white/95"
            )}
          >
            {feature.title}
          </h3>
          <span
            className={cn(
              "text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider transition-colors duration-300",
              isActive
                ? "bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                : "bg-blue-500/15 text-blue-400 border border-blue-500/25"
            )}
          >
            {feature.highlight}
          </span>
        </div>
        <p
          className={cn(
            "text-sm leading-relaxed transition-colors duration-300",
            isActive ? "text-white/90" : "text-white/65"
          )}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
