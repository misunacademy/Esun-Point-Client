import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  icon: ReactNode;
  target: number;
  suffix: string;
  label: string;
  animate: boolean;
  delay?: number;
}

export default function StatCard({ icon, target, suffix, label, animate, delay = 0 }: StatCardProps) {
  const count = useCountUp(target, 1800, animate);

  return (
    <div
      className={cn("relative p-[2px] rounded-2xl overflow-hidden mx-12 md:mx-0 group", "transition-all duration-500 hover:-translate-y-3")}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, transparent 25%, hsl(217 91% 60% / 0.6) 38%, hsl(217 85% 70%) 48%, hsl(217 90% 85%) 53%, hsl(0 0% 100% / 0.9) 56%, hsl(217 90% 85%) 59%, hsl(217 85% 70%) 64%, hsl(217 91% 60% / 0.4) 72%, transparent 82%)',
        }}
      />

      <div className={cn("relative flex flex-col items-center justify-center pt-10 pb-10 px-6 rounded-2xl bg-[#060a12] border border-blue-500/10 overflow-hidden", "group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500")}>
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/20 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/20 rounded-br-2xl" />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className={cn("relative z-10 w-16 h-16 rounded-2xl", "bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 flex items-center justify-center", "shadow-lg shadow-blue-500/40", "group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/50", "transition-all duration-500 rotate-3 group-hover:rotate-0")}>
          <div className="text-white">{icon}</div>
        </div>

        <span className={cn("relative z-10 text-5xl md:text-6xl font-bold mt-5 tabular-nums", "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent")}>
          {count}{suffix}
        </span>

        <span className="relative z-10 mt-3 text-base md:text-lg font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 text-center leading-relaxed h-10">
          {label}
        </span>
      </div>
    </div>
  );
}
