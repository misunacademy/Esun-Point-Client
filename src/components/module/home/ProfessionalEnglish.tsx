"use client";

import { motion } from "framer-motion";
import { FadeIn } from '@/components/ui/FadeIn';
import { Mic2, PenLine, MousePointer2, Wrench, GitBranch, BriefcaseBusiness } from "lucide-react";
import AnimatedButton from '@/components/shared/AnimatedButton';
import SkillBadge from './SkillBadge';
import FeatureCard from './FeatureCard';

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

const skills = [
  { icon: <Mic2 className="w-8 h-8" />, name: "Speaking" },
  { icon: <PenLine className="w-8 h-8" />, name: "Writing" },
];

export default function ProfessionalEnglish() {
  return (
    <section className="relative overflow-hidden bg-surface-deep py-20 selection:bg-blue-500/30 selection:text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[400px] w-[800px] -translate-x-1/2 rounded-[100%] bg-blue-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-[100%] bg-blue-400/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn delay={0.1} direction="up">
            <div className="mb-8 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500/80" />
              </span>
              English for Professional Communication
            </div>
          </FadeIn>

          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 md:-left-8 lg:-left-2 top-40 md:top-44 hidden md:block z-20"
            >
              <SkillBadge icon={skills[0].icon} name={skills[0].name} delay={1} />
              <div className="absolute -bottom-4 right-4 h-3 w-3 rounded-full bg-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 lg:-right-2 top-28 md:top-32 hidden md:block z-20"
            >
              <SkillBadge icon={skills[1].icon} name={skills[1].name} delay={2} />
              <div className="absolute -top-3 -left-8 h-4 w-4 rounded-full bg-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            </motion.div>

            <FadeIn delay={0.2} direction="up" className="relative z-30 w-full">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.15]">
                Professional English{" "}
                <span className="bg-gradient-to-br from-white via-blue-400 to-blue-600 bg-clip-text text-transparent">Communication Skills</span>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="up" className="relative z-10">
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Develop strong communication skills that help you succeed in academic and professional environments. Our English for Professional Communication course focuses on improving your speaking confidence, workplace communication, and real-life conversation skills.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" className="relative z-10 w-full">
            <div className="mb-12 flex flex-col items-center justify-center gap-6">
              <div className="flex md:hidden items-center justify-center gap-6">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2">
                    <SkillBadge icon={skill.icon} name={skill.name} delay={i + 1} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <AnimatedButton href="/checkout">
                  Start Your Learning Journey
                  <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </AnimatedButton>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="mb-12 flex w-full max-w-[800px] items-center gap-4 opacity-80">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-lg select-none">{"←"}</span>
                <span className="relative inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs sm:text-sm font-medium uppercase text-blue-400 backdrop-blur-md">
                  What you will learn in this course
                </span>
                <span className="text-blue-400 text-lg select-none">{"→"}</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-3">
          {featureCards.map((card, i) => (
            <FeatureCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
