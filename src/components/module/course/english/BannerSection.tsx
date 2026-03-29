'use client'
import { useGetCourseBySlugQuery } from "@/redux/api/courseApi";
import { useGetCurrentEnrollmentBatchQuery, useGetUpcomingBatchesQuery } from "@/redux/api/batchApi";
import { useEffect } from "react";
import { track } from "@/lib/metaPixel";
import Countdown from "./Countdown";
import { DiamondMinus } from "lucide-react";
import Link from "next/link";
const COURSE_SLUG = "english-for-professional-communication";

const BannerSection = () => {
    // ── Dynamic batch data ──────────────────────────────────────────────────
    const { data: courseBySlug,isLoading:isCourseLoading } = useGetCourseBySlugQuery(COURSE_SLUG);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const courseId = (courseBySlug?.data as any)?._id;

    const { data: currentBatchRes,isLoading:isCurrentBatchLoading } = useGetCurrentEnrollmentBatchQuery(
        { courseId }, { skip: !courseId }
    );
    const { data: upcomingBatchRes,isLoading:isUpcomingBatchLoading } = useGetUpcomingBatchesQuery(
        { courseId },
        { skip: !courseId || !!currentBatchRes?.data }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resolvedBatch = (currentBatchRes?.data as any) ?? (upcomingBatchRes?.data as any)?.[0];

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
    // ───────────────────────────────────────────────────────────────────────

    useEffect(() => {
        track("ViewContent", {
            content_name: "English For Professional Communication",
            content_type: "course",
            content_ids: ["english-professional-comm-misun-2024"],
        });
    }, []);

    if(isCourseLoading|| isCurrentBatchLoading || isUpcomingBatchLoading){
        return <div className="flex items-center justify-center h-screen">Loading...</div>
    }
    return (
        <section className="relative bg-[#060a12] overflow-hidden font-bangla">
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-28 pb-24 px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90">
                        English For Professional Communication
                    </span>
                </div>

            <h1 className="font-bold font-sans text-[26px] md:text-3xl lg:text-5xl text-center uppercase pt-2 leading-snug">
                <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">English For </span>
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(217_91%_60%/0.4)]">
                    Professional
                </span>
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

            {/* ── Countdown ── */}
            <Countdown courseSlug={COURSE_SLUG} />
            {/* Decorative divider */}
            <div className="flex items-center gap-3 w-full max-w-xs mb-2 mt-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40" />
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40" />
            </div>
            <div className="relative my-6 p-[1.5px] rounded-xl overflow-hidden">
                {/* <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(156_70%_42%)_100%)]" /> */}
                <div className="relative  rounded-xl px-8 py-4 font-bold text-xl text-white shadow-[0_0_24px_hsl(217_91%_60%/0.4)]">
                    Course Fee: Only <span className="text-blue-400 font-bold">
                        {resolvedBatch?.price ? resolvedBatch?.price.toLocaleString('en-IN') : '--'}
                        </span> BDT
                </div>
            </div>

            {/* ── Enrollment timeline card ── */}
            {(enrollmentPeriod.startDate || enrollmentPeriod.endDate || enrollmentPeriod.classStart) && (
                <>
                    {/* Decorative divider */}
                    <div className="flex items-center gap-3 w-full max-w-xs mb-2 mt-2">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40" />
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40" />
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/5 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-10 mb-4 py-8 px-10 w-80 mx-auto md:w-[600px] lg:w-auto items-center justify-center">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/50 rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/50 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/50 rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/50 rounded-br-2xl" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                        {enrollmentPeriod.startDate && (
                            <div className="flex flex-col text-center lg:text-left">
                                <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Enrollment Starts</span>
                                <span className="text-xl font-bold text-white">{enrollmentPeriod.startDate}</span>
                            </div>
                        )}
                        {enrollmentPeriod.startDate && enrollmentPeriod.endDate && (
                            <div className="flex items-center justify-center rotate-90 lg:rotate-0">
                                <DiamondMinus size={28} className="text-blue-500/50" />
                            </div>
                        )}
                        {enrollmentPeriod.endDate && (
                            <div className="flex flex-col text-center lg:text-left">
                                <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Enrollment Ends</span>
                                <span className="text-xl font-bold text-white">{enrollmentPeriod.endDate}</span>
                            </div>
                        )}
                        {enrollmentPeriod.classStart && (
                            <>
                                <div className="flex items-center justify-center rotate-90 lg:rotate-0">
                                    <DiamondMinus size={28} className="text-blue-500/50" />
                                </div>
                                <div className="flex flex-col text-center lg:text-left">
                                    <span className="text-xs text-blue-400/80 mb-1 tracking-wider uppercase font-semibold">Classes Start</span>
                                    <span className="text-xl font-bold text-white">{enrollmentPeriod.classStart}</span>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}

            <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Link href="/checkout?course=english-for-professional-communication">
                    <div className="inline-block relative p-[1.5px] rounded-xl overflow-hidden">
                        <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
                        <button className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 transition-all duration-300 text-white font-bold text-base px-10 py-3.5 rounded-xl shadow-[0_0_24px_hsl(217_91%_60%/0.4)] hover:shadow-[0_0_36px_hsl(217_91%_60%/0.6)] cursor-pointer">
                            Enroll Now
                        </button>
                    </div>
                </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
                {[
                    { val: "3 Months", lbl: "Course Duration" },
                    { val: "Live", lbl: "Interactive Classes" },
                    { val: "24/7", lbl: "Support" },
                    { val: "Certificate", lbl: "On Completion" },
                ].map((s) => (
                    <div key={s.lbl} className="flex flex-col items-center gap-0.5">
                        <span className="text-blue-400 font-bold text-base">{s.val}</span>
                        <span className="text-white/45 text-xs">{s.lbl}</span>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default BannerSection;
