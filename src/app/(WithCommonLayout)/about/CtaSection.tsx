import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedButton from '@/components/shared/AnimatedButton';

export function CtaSection() {
  return (
    <section className="relative bg-[#060a0f] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -top-10 left-1/4 w-[400px] h-[400px] bg-primary/7 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
          </span>
          <span className="text-xs font-semibold uppercase text-primary/90">Join Now</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold leading-[145%] mb-5">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/85 bg-clip-text text-transparent">Start Your Career </span>
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(217_70%_42%/0.5)]">Now</span>
        </h2>

        <p className="text-white/50 mb-10 leading-relaxed">
          Join MISUN Academy like thousands of other students to acquire digital skills and become successful in freelancing or local markets.
        </p>

        <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedButton href="/checkout">
            Enroll Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </AnimatedButton>
          <Link href="/courses">
            <button className="inline-flex items-center gap-2 bg-[#060a0f] border border-primary/30 text-white/70 hover:border-primary/60 hover:text-white transition-all duration-300 px-8 py-3.5 rounded-xl text-base font-semibold cursor-pointer">
              <ArrowRight className="w-4 h-4 text-primary/70" />
              View Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
