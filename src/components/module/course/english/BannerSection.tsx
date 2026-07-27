'use client'
import { useEffect } from "react";
import { track } from "@/lib/metaPixel";
import { useCurrentBatch } from '@/hooks/useCurrentBatch';
import Countdown from "./Countdown";
import { DotGrid, AmbientGlow, SectionBorder } from "@/components/shared/Decorative";
import Link from "next/link";
import CourseBadge from "./CourseBadge";
import EnrollmentTimelineCard from "./EnrollmentTimelineCard";
import QuickStats from "./QuickStats";
import { Skeleton } from 'boneyard-js/react';

const COURSE_SLUG = "english-for-professional-communication";

const BannerSection = () => {
  const { batch: resolvedBatch, isLoading, serverTimestamp } = useCurrentBatch({ courseSlug: COURSE_SLUG, fallbackToUpcoming: true });

  const batchTitle = resolvedBatch?.title.split(' ')[1] ?? null;
  const enrollmentPeriod = {
    startDate: resolvedBatch?.enrollmentStartDate
      ? new Date(resolvedBatch.enrollmentStartDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
      : null,
    endDate: resolvedBatch?.enrollmentEndDate
      ? new Date(resolvedBatch.enrollmentEndDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
      : null,
    classStart: resolvedBatch?.startDate
      ? new Date(resolvedBatch.startDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
      : null,
  };

  useEffect(() => {
    track("ViewContent", {
      content_name: "English For Professional Communication",
      content_type: "course",
      content_ids: ["english-professional-comm-misun-2024"],
    });
  }, []);

  return (
    <Skeleton
      name="banner-section"
      loading={isLoading}
      fixture={
        <section className="relative bg-[#060a12] overflow-hidden font-bangla">
          <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-28 pb-24 px-4">
            <h1 className="font-bold font-sans text-[26px] md:text-3xl lg:text-5xl text-center uppercase pt-2 leading-snug">
              <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">English For Professional Communication</span>
            </h1>
          </div>
        </section>
      }
      fallback={
        <section className="relative bg-[#060a12] overflow-hidden font-bangla">
          <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-28 pb-24 px-4 space-y-6">
            <div className="h-8 w-48 bg-primary/10 rounded-full animate-pulse" />
            <div className="h-12 w-[600px] max-w-[90vw] bg-primary/10 rounded-lg animate-pulse" />
            <div className="h-8 w-40 bg-primary/10 rounded-lg animate-pulse" />
            <div className="h-4 w-[500px] max-w-[80vw] bg-primary/10 rounded animate-pulse" />
            <div className="flex gap-3 sm:gap-4">
              <div className="w-20 h-24 sm:w-24 sm:h-28 bg-primary/10 rounded-2xl animate-pulse" />
              <div className="w-20 h-24 sm:w-24 sm:h-28 bg-primary/10 rounded-2xl animate-pulse" />
              <div className="w-20 h-24 sm:w-24 sm:h-28 bg-primary/10 rounded-2xl animate-pulse" />
              <div className="w-20 h-24 sm:w-24 sm:h-28 bg-primary/10 rounded-2xl animate-pulse" />
            </div>
          </div>
        </section>
      }
    >
    <section className="relative bg-[#060a12] overflow-hidden font-bangla">
      <DotGrid className="opacity-[0.04]" />
      <AmbientGlow className="top-0 left-1/4" color="bg-blue-500/8" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />
      <SectionBorder position="bottom" />

      <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-28 pb-24 px-4">
        <CourseBadge />

        <h1 className="font-bold font-sans text-[26px] md:text-3xl lg:text-5xl text-center uppercase pt-2 leading-snug">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">English For </span>
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(217_91%_60%/0.4)]">Professional</span>
          <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent"> Communication</span>
        </h1>
        {batchTitle !== null && (
          <h2 className="text-blue-400/80 block text-[22px] md:text-2xl lg:text-3xl font-bold uppercase mt-2 tracking-widest">
            (Batch-{String(batchTitle).padStart(2, '0')})
          </h2>
        )}

        <p className="w-auto sm:w-10/12 text-[15px] leading-[170%] text-center max-w-3xl mt-6 mx-5 text-white/65">
          Speak English with confidence in job interviews, business meetings, and professional environments.
          Learn through speaking practice, presentation skills, email writing, and <strong>1:1</strong> mentorship under the guidance of Instructor <strong>Puspita Singha</strong>.
        </p>

        <Countdown courseSlug={COURSE_SLUG} serverTimestamp={serverTimestamp} />

        <div className="flex items-center gap-3 w-full max-w-xs mb-2 mt-2" aria-hidden="true">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div className="relative my-6 p-[1.5px] rounded-xl overflow-hidden">
          <div className="relative rounded-xl px-8 py-4 font-bold text-xl text-white shadow-[0_0_24px_hsl(217_91%_60%/0.4)]">
            Course Fee: Only <span className="text-blue-400 font-bold">
              {resolvedBatch?.price ? resolvedBatch.price.toLocaleString('en-IN') : '--'}
            </span> BDT
          </div>
        </div>

        <EnrollmentTimelineCard
          startDate={enrollmentPeriod.startDate}
          endDate={enrollmentPeriod.endDate}
          classStart={enrollmentPeriod.classStart}
        />

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link href={`/checkout?course=${COURSE_SLUG}`}>
            <div className="inline-block relative p-[1.5px] rounded-xl overflow-hidden">
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
              <button className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 transition-all duration-300 text-white font-bold text-base px-10 py-3.5 rounded-xl shadow-[0_0_24px_hsl(217_91%_60%/0.4)] hover:shadow-[0_0_36px_hsl(217_91%_60%/0.6)] cursor-pointer">
                Enroll Now
              </button>
            </div>
          </Link>
        </div>

        <QuickStats />
      </div>
    </section>
    </Skeleton>
  )
}

export default BannerSection;
