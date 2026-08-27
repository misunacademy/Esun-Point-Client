"use client";

import { FadeIn } from "../../ui/FadeIn";
import { useCurrentBatch } from '@/hooks/useCurrentBatch';
import CourseEnrollmentCard from './CourseEnrollmentCard';
import { Skeleton } from 'boneyard-js/react';

export const EnrollmentSection = () => {
  const { batch, isLoading, serverTimestamp } = useCurrentBatch();

  return (
    <Skeleton
      name="EnrollmentSection"
      loading={isLoading}
      fixture={
        <section className="relative overflow-hidden bg-[#060a12] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 rounded-2xl p-8">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="bg-white/10 rounded-lg p-4" />
              </div>
            </div>
          </div>
        </section>
      }
      fallback={
        <section className="relative overflow-hidden bg-[#060a12] py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 rounded-2xl p-8 space-y-4">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="bg-white/10 rounded-lg p-4" />
              </div>
              <div className="space-y-3 mt-6">
                <div className="h-10 bg-white/5 rounded-xl" />
                <div className="h-10 bg-white/5 rounded-xl w-3/4 mx-auto" />
                <div className="h-10 bg-white/5 rounded-xl w-1/2 mx-auto" />
              </div>
            </div>
          </div>
        </section>
      }
    >
    <section id="enroll-now" data-dark-section className="relative overflow-hidden bg-[#060a12] py-24 px-4 selection:bg-blue-500/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[400px] w-[800px] -translate-x-1/2 rounded-[100%] bg-blue-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-[100%] bg-blue-400/[0.04] blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-sm shadow-[0_0_15px_hsl(var(--primary)/0.12)]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-semibold uppercase text-primary/90">Enrollment Open</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            <span className="relative inline-block pt-2 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Enroll Now
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            </span>
            <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              {' '}to Level Up Your Career!
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/60" />
            <div className="h-px w-32 bg-gradient-to-r from-primary/60 to-primary/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <div className="h-px w-16 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait any longer, start your preparation now because once time runs out, you&apos;ll have to wait again...!
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6">
          <CourseEnrollmentCard batch={batch ?? null} serverTimestamp={serverTimestamp} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
    </Skeleton>
  );
};
