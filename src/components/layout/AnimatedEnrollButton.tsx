'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

function AnimatedEnrollButton() {
  const handleEnrollClick = () => {
    import('@/lib/metaPixel').then(({ track }) =>
      track('InitiateCheckout', {
        content_name: 'English for Professional Communication',
        content_type: 'course',
        value: 3000,
        currency: 'BDT',
      })
    );
  };

  return (
    <Link href="/checkout" className="w-full sm:w-auto block" onClick={handleEnrollClick} aria-label="Enroll now">
      <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden
        shadow-[0_4px_24px_rgba(59,130,246,0.35)]
        hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
        hover:scale-105 hover:-translate-y-0.5
        active:scale-95 active:translate-y-0
        transition-all duration-300 ease-out">
        <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
        <span className="group relative overflow-hidden
          inline-flex items-center gap-2
          px-6 py-2
          text-sm font-bold tracking-wide rounded-full
          bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600
          text-white
          hover:from-blue-600 hover:via-blue-400 hover:to-blue-600
          transition-all duration-300 ease-out">
          <span className="relative z-10 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            Enroll Now
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </span>
      </div>
    </Link>
  );
}

export default memo(AnimatedEnrollButton);
