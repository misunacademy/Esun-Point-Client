"use client"

import { motion } from "framer-motion"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { Mic2, PenLine, MousePointer2, Wrench, GitBranch, BriefcaseBusiness } from "lucide-react";

//  Skill Badge 

interface SkillBadgeProps {
    icon: React.ReactNode;
    name: string;
    delay?: number;
}

const SkillBadge = ({ icon, name, delay = 0 }: SkillBadgeProps) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="group relative cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/15 blur-xl opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/[0.1] bg-blue-500/[0.05] backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-blue-500/[0.35] group-hover:bg-blue-500/[0.12] group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)] z-10 text-blue-400">
                        {icon}
                    </div>
                </motion.div>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="rounded-lg border border-blue-500/[0.15] bg-[#060a12] px-3 py-1.5 font-medium text-blue-400 shadow-xl">
                <p>{name}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

//  Data 

const featureCards = [
    {
        icon: <Wrench className="h-5 w-5" />,
        title: "Practical Communication Skills",
        description: "Learn essential speaking and communication techniques used in professional and workplace environments.",
    },
    {
        icon: <GitBranch className="h-5 w-5" />,
        title: "Real-Life Conversation Practice",
        description: "Improve your fluency through real-world conversation scenarios, discussions, and speaking exercises.",
    },
    {
        icon: <BriefcaseBusiness className="h-5 w-5" />,
        title: "Expert Guidance & Support",
        description: "Get guidance from experienced instructors who help you build confidence in professional English communication.",
    },
];

//  Section 

export default function GraphicsSkills() {
    const skills = [
        { icon: <Mic2 className="w-8 h-8" />, name: "Speaking" },
        { icon: <PenLine className="w-8 h-8" />, name: "Writing" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#060a12] py-24 selection:bg-blue-500/30 selection:text-white md:py-32">

            {/* Elegant Background Meshes & Masks */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Subtle Top Glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[400px] w-[800px] -translate-x-1/2 rounded-[100%] bg-blue-500/[0.06] blur-[100px]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-[100%] bg-blue-400/[0.04] blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/*  Hero Header Block  */}
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Modern Glass Badge */}
                    <FadeIn delay={0.1} direction="up">
                        <div className="mb-8 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 backdrop-blur-md transition-colors hover:bg-blue-500/20">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500/80" />
                            </span>
                            English for Professional Communication
                        </div>
                    </FadeIn>

                    {/* Crisp Typography Heading & Floating Accents */}
                    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">

                        {/* Central Glow behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

                        {/* Floating accent dots */}
                        <motion.div animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -left-12 top-0 h-2 w-2 rounded-full bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10 hidden md:block pointer-events-none" />
                        <motion.div animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-1/4 -bottom-10 h-4 w-4 rounded-full bg-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 hidden md:block pointer-events-none" />
                        <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute right-1/4 -top-8 h-3 w-3 rounded-full bg-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10 hidden md:block pointer-events-none" />
                        <motion.div animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -right-10 bottom-4 h-2.5 w-2.5 rounded-full bg-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.8)] z-10 hidden md:block pointer-events-none" />

                        {/* Floating Badge left */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-6 md:-left-12 lg:-left-4 top-40 md:top-44 hidden sm:block z-20"
                        >
                            <SkillBadge icon={skills[0].icon} name={skills[0].name} delay={1} />
                            <div className="absolute -bottom-4 right-4 h-3 w-3 rounded-full bg-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                        </motion.div>

                        {/* Floating Badge right */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 md:-right-12 lg:-right-4 top-28 md:top-32 hidden sm:block z-20"
                        >
                            <SkillBadge icon={skills[1].icon} name={skills[1].name} delay={2} />
                            <div className="absolute -top-3 -left-8 h-4 w-4 rounded-full bg-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                        </motion.div>

                        <FadeIn delay={0.2} direction="up" className="relative z-30 w-full pointer-events-none">
                            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl lg:leading-[1.1] pointer-events-auto">
                                Professional English{" "}
                                <span className="bg-gradient-to-br from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    Communication Skills
                                </span>
                            </h2>
                        </FadeIn>
                    </div>

                    {/* Subtitle */}
                    <FadeIn delay={0.3} direction="up" className="relative z-10">
                        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-zinc-400/80 md:text-lg hover:text-white/80 transition-colors">
                            Develop strong communication skills that help you succeed in academic and professional environments. Our English for Professional Communication course focuses on improving your speaking confidence, workplace communication, and real-life conversation skills.{' '}
                            Learn how to communicate clearly in meetings, interviews, presentations, and everyday professional situations.
                        </p>
                    </FadeIn>

                    {/* CTA Group */}
                    <FadeIn delay={0.4} direction="up" className="relative z-10 w-full">
                        <div className="mb-14 flex flex-col items-center justify-center gap-8">

                            {/* Mobile Skills inline fallback */}
                            <div className="flex sm:hidden items-center justify-center gap-6">
                                {skills.map((skill, i) => (
                                    <div key={skill.name} className="flex flex-col items-center gap-3">
                                        <SkillBadge icon={skill.icon} name={skill.name} delay={i + 1} />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/60">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop CTA */}
                            <div className="pt-4 hidden md:inline-flex">
                                <Link href="/checkout">
                                    <div className="relative inline-flex p-[2px] rounded-xl overflow-hidden
                                              shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                                              hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                                              hover:scale-105 hover:-translate-y-0.5
                                              active:scale-95 active:translate-y-0
                                              transition-all duration-300 ease-out">
                                        <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
                                        <button className="group relative overflow-hidden
                                                inline-flex items-center gap-2
                                                px-8 py-3.5
                                                text-base font-bold tracking-wide rounded-[10px]
                                                bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700
                                                text-white
                                                hover:from-blue-700 hover:via-blue-400 hover:to-blue-700
                                                transition-all duration-300 ease-out">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Start Your Learning Journey
                                                <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Minimal Divider */}
                    <FadeIn delay={0.5} direction="up">
                        <div className="mb-14 flex w-full max-w-[800px] items-center gap-4 opacity-70">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                            <div className="flex items-center gap-2">
                                <span className="text-blue-500/60 text-xl select-none">←</span>
                                <span className="relative inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-md font-medium uppercase text-blue-400 backdrop-blur-md shadow-sm">
                                    What you will learn in this course
                                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-blue-400 blur-lg" />
                                </span>
                                <span className="text-blue-500/60 text-xl select-none">→</span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                        </div>
                    </FadeIn>
                </div>

                {/* Elegant Glass Cards Grid */}
                <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
                    {featureCards.map((card, i) => (
                        <FeatureCard key={card.title} {...card} index={i} />
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 md:hidden flex justify-center items-center mt-8">
                    <Link href="/checkout">
                        <div className="relative inline-flex p-[2px] rounded-xl overflow-hidden
                                              shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                                              hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                                              hover:scale-105 hover:-translate-y-0.5
                                              active:scale-95 active:translate-y-0
                                              transition-all duration-300 ease-out">
                            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
                            <button className="group relative overflow-hidden
                                                inline-flex items-center gap-2
                                                px-8 py-3.5
                                                text-base font-bold tracking-wide rounded-[10px]
                                                bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700
                                                text-white
                                                hover:from-blue-700 hover:via-blue-400 hover:to-blue-700
                                                transition-all duration-300 ease-out">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Learning Journey
                                    <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

//  Feature Card 

function FeatureCard({
    icon,
    title,
    description,
    index,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(59,130,246,0.06)]"
        >
            {/* Animated Glowing Border */}
            <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_40%,hsl(217_91%_60%/0.4)_50%,transparent_60%,transparent_100%)]" />

            {/* Inner Card */}
            <div className="relative h-full w-full rounded-[15px] bg-[#060a12] p-8 border border-white/[0.02] backdrop-blur-md transition-colors duration-500 group-hover:bg-[#080f1f]">

                {/* Top Shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon Box */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/[0.15] bg-blue-500/[0.05] text-blue-400 transition-colors duration-500 group-hover:bg-blue-500/[0.1] group-hover:text-blue-300">
                    {icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-[17px] font-semibold tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
