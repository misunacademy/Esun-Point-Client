import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({ href, children, className, onClick }: AnimatedButtonProps) {
  return (
    <Link href={href} className={className} onClick={onClick}>
      <div className={cn("relative inline-flex p-[2px] rounded-xl overflow-hidden", "shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]", "hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0", "transition-all duration-300 ease-out")}>
        <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
        <span className={cn("group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5", "text-base font-bold tracking-wide rounded-[10px]", "bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 text-white", "hover:from-blue-700 hover:via-blue-400 hover:to-blue-700", "transition-all duration-300 ease-out")}>
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </span>
      </div>
    </Link>
  );
}
