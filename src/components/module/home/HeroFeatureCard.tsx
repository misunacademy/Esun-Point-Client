import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: 'blue' | 'cyan' | 'indigo';
}

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    glow: '',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    glow: 'bg-cyan-500/5',
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400',
    glow: '',
  },
};

export function HeroFeatureCard({ icon, title, description, accent = 'blue' }: HeroFeatureCardProps) {
  const c = colorMap[accent];

  return (
    <div className="relative bg-surface-deep/40 border border-white/5 backdrop-blur-sm p-6 rounded-3xl transition-all duration-300 hover:bg-surface-deep/60 hover:border-white/10 text-center flex flex-col items-center overflow-hidden">
      {c.glow && (
        <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 blur-xl pointer-events-none", c.glow)} />
      )}
      <div className={cn("relative z-10 w-14 h-14 rounded-full border flex items-center justify-center mb-4", c.bg, c.border, c.text)}>
        {icon}
      </div>
      <h2 className="relative z-10 text-white font-bold text-lg mb-2">{title}</h2>
      <p className="relative z-10 text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

