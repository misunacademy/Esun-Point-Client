'use client';

import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Feature } from '@/constants/whyUs';

interface TimelineCardProps {
  feature: Feature;
  Icon: LucideIcon;
}

export default function TimelineCard({ feature, Icon }: TimelineCardProps) {
  return (
    <div
      className={cn("group relative w-full md:max-w-[420px] bg-[#060a12] border border-blue-500/15 rounded-2xl p-6 overflow-hidden", "hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1", "transition-all duration-300 ease-out cursor-default")}
    >
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-blue-500/30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-blue-500/30 rounded-tr-2xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start gap-4">
        <div className={cn("flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700", "flex items-center justify-center", "shadow-md shadow-blue-500/30", "group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:shadow-lg", "transition-all duration-300")}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-300 transition-colors duration-300">
              {feature.title}
            </h3>
            <span className="flex-shrink-0 text-[11px] bg-blue-500/15 text-blue-400 border border-blue-500/25 px-2 py-0.5 rounded-full font-medium">
              {feature.highlight}
            </span>
          </div>
          <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
