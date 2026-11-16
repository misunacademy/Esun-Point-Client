import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SIZE_CLASSES = {
  md: 'px-6 py-3 text-lg',
  lg: 'px-9 py-3.5 text-lg',
} as const;

type EnrollNowButtonProps = {
  courseSlug: string;
  size?: keyof typeof SIZE_CLASSES;
  fullWidth?: boolean;
  className?: string;
};

export function EnrollNowButton({
  courseSlug,
  size = 'md',
  fullWidth = false,
  className,
}: EnrollNowButtonProps) {
  return (
    <Link
      href={`/checkout?course=${courseSlug}`}
      className={cn(
        'pulse-enroll-button group/btn relative inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl font-bangla font-bold tracking-wide text-white shadow-[0_4px_20px_hsl(var(--primary)/0.35)] transition-shadow duration-300 hover:shadow-[0_10px_30px_hsl(var(--primary)/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep',
        SIZE_CLASSES[size],
        fullWidth && 'w-full sm:w-auto',
        className
      )}
    >
      <span className="relative z-10">Enroll Now</span>
      <ArrowRight
        size={16}
        className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
