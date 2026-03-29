'use client';

import {
  Headphones,
  Video,
  Target,
  BookOpen,
  Star,
  ArrowRight,
  Users,
  Clock,
  Laptop,
  Search,
  UserCircle,
  Zap,
  PencilRuler,
  Gift,
  FileBadge,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: { icon: LucideIcon; title: string; description: string; highlight: string }[] = [
  {
    icon: Headphones,
    title: 'Regular Mentorship & Support Sessions',
    description:
      'Get continuous guidance from experienced mentors who help you improve your speaking confidence, communication skills, and learning progress.',
    highlight: 'Support',
  },
  {
    icon: Video,
    title: 'Live Interactive Classes',
    description:
      'Participate in live classes where you practice English through discussions, activities, and real-life communication scenarios.',
    highlight: 'Interactive Learning',
  },
  {
    icon: Target,
    title: 'Real Conversation Practice',
    description:
      'Improve your fluency through practical speaking exercises, role plays, and everyday conversation practice.',
    highlight: 'Real Practice',
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning Guidance',
    description:
      'Receive individual feedback to improve pronunciation, sentence structure, and professional communication skills.',
    highlight: 'Expert Guidance',
  },
  {
    icon: Laptop,
    title: '100+ Practice Activities',
    description:
      'Strengthen your English skills through a variety of speaking, listening, and communication practice activities.',
    highlight: 'Hands-On Practice',
  },
  {
    icon: Search,
    title: 'Interview & Workplace Communication Training',
    description:
      'Learn how to communicate confidently in interviews, meetings, presentations, and professional environments.',
    highlight: 'Career Ready',
  },
  {
    icon: UserCircle,
    title: 'Professional Communication Practice',
    description:
      'Practice real workplace communication including meetings, presentations, and group discussions.',
    highlight: 'Professional Skills',
  },
  {
    icon: Zap,
    title: 'AI-Powered Learning Support',
    description:
      'Use modern AI tools and guided exercises to improve pronunciation, vocabulary, and sentence structure.',
    highlight: 'AI Powered',
  },
  {
    icon: PencilRuler,
    title: 'Advanced Speaking Techniques',
    description:
      'Learn advanced speaking methods that help you communicate clearly and confidently.',
    highlight: 'Top-Level Skills',
  },
  {
    icon: Gift,
    title: 'Exclusive Student Community',
    description:
      'Join a supportive learning community where students practice English together and grow their communication skills.',
    highlight: 'Community',
  },
  {
    icon: FileBadge,
    title: 'Certificate of Completion',
    description: 'Receive a professional certificate after successfully completing the course.',
    highlight: 'Official Recognition',
  },
  {
    icon: Rocket,
    title: 'Mock Interview Practice',
    description: 'Prepare for job interviews with mock interview sessions and real communication practice.',
    highlight: 'Interview Ready',
  },
  {
    icon: Star,
    title: '200+ Learning Resources',
    description: 'Get access to premium resources including worksheets, conversation guides, and practice materials.',
    highlight: 'Resource Boost',
  },
];

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  // { icon: Users, value: '500+', label: 'Students Enrolled' },
  // { icon: Star, value: '4.9', label: 'Course Rating' },
  { icon: Clock, value: '3 Months', label: 'Duration' },
];

// ─── Component ────────────────────────────────────────────────────────────────

const WhyChooseSection = () => {
  return (
    <section className="relative bg-[#060a12] overflow-hidden mb-0 py-24">
      {/* ── Top edge separator ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* ── Dot-grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-blue-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-[5%] w-[300px] h-[220px] bg-blue-500/7 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-[5%] w-[280px] h-[200px] bg-blue-500/6 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative max-w-7xl mx-auto px-4">

        {/* ── Heading ── */}
        <FadeIn className="text-center mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase text-blue-400/90">
              Premium English Communication Course
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5
            bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
            Why Choose{' '}
            <span className="relative inline-block
              bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              Esun Point?
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0" />
            </span>
          </h2>
          <div className="mt-3 mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/60" />
            <div className="h-px w-32 bg-gradient-to-r from-blue-500/60 to-blue-500/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            <div className="h-px w-16 bg-gradient-to-r from-blue-500/20 to-transparent" />
          </div>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            At Esun Point, we focus on practical learning that helps you develop real-world communication skills.
            Our English for Professional Communication course is designed to improve your speaking confidence, workplace communication, and professional English abilities through guided lessons and real-life practice.
            Learn from experienced mentors and build the communication skills needed to succeed in modern careers.
          </p>
        </FadeIn>

        {/* ── Stats strip ── */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#060a12] border border-blue-500/20 rounded-2xl px-6 py-4 min-w-[200px]
                  hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                {/* Icon badge */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/55 mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical connector line — desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(217 91% 60%) 8%, hsl(217 85% 70%) 50%, hsl(217 91% 60%) 92%, transparent)',
              boxShadow: '0 0 14px hsl(217 91% 60% / 0.6)',
            }}
          />
          {/* Vertical connector line — mobile */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] md:hidden"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(217 91% 60%) 5%, hsl(217 91% 60%) 95%, transparent)',
              boxShadow: '0 0 10px hsl(217 91% 60% / 0.5)',
            }}
          />

          <div className="flex flex-col gap-10">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              const Icon = feature.icon;

              return (
                <div key={index} className="relative flex items-center gap-0 md:gap-0">

                  {/* Left card slot (even index) */}
                  <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end pr-10' : 'justify-end pr-10 invisible pointer-events-none'}`}>
                    {isEven && (
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <TimelineCard feature={feature} index={index} Icon={Icon} />
                      </motion.div>
                    )}
                  </div>

                  {/* Step circle on the line */}
                  <motion.div
                    className="hidden md:flex flex-shrink-0 relative z-10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700
                      flex items-center justify-center font-bold text-white text-sm
                      shadow-lg shadow-blue-500/50 ring-4 ring-[#060a12]
                      hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Right card slot (odd index) */}
                  <div className={`hidden md:flex flex-1 ${!isEven ? 'justify-start pl-10' : 'justify-start pl-10 invisible pointer-events-none'}`}>
                    {!isEven && (
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <TimelineCard feature={feature} index={index} Icon={Icon} />
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <motion.div
                    className="flex md:hidden items-start gap-5 w-full pl-2"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <div className="flex-shrink-0 relative z-10 mt-1">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700
                        flex items-center justify-center font-bold text-white text-xs
                        shadow-md shadow-blue-500/40 ring-2 ring-[#060a12]">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <TimelineCard feature={feature} index={index} Icon={Icon} />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <FadeIn delay={0.4} direction="up" className="text-center mt-20">
          <div className="relative bg-[#060a12] border border-blue-500/20 rounded-3xl max-w-2xl mx-auto p-10 overflow-hidden
            hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            style={{ boxShadow: '0 0 60px hsl(217 91% 60% / 0.10)' }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/15 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/15 rounded-br-3xl" />
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            {/* Top accent line */}
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Join hundreds of successful students and transform your communication skills with our complete English for Professional Communication program.
              Get lifetime access and an official certificate of completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/checkout">
                <div className="relative p-[2px] rounded-xl overflow-hidden
                  shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                  hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                  hover:scale-105 hover:-translate-y-0.5
                  active:scale-95 active:translate-y-0
                  transition-all duration-300 ease-out">
                  <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
                  <button
                    className="group relative overflow-hidden
                      w-full sm:w-auto
                      inline-flex items-center justify-center gap-2
                      px-8 py-3.5
                      text-base font-bold tracking-wide rounded-[10px]
                      bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700
                      text-white
                      hover:from-blue-700 hover:via-blue-400 hover:to-blue-700
                      transition-all duration-300 ease-out"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0
                      bg-gradient-to-r from-transparent via-white/25 to-transparent
                      -translate-x-full group-hover:translate-x-full
                      transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </Link>
              <Link href="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-blue-500/40 text-white hover:bg-blue-500/10 hover:border-blue-500 hover:text-white"
                >
                  View Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
      {/* ── Bottom edge separator ── */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
};

// ─── Timeline Card Sub-component ──────────────────────────────────────────────

interface TimelineCardProps {
  feature: { icon: LucideIcon; title: string; description: string; highlight: string };
  index: number;
  Icon: LucideIcon;
}

function TimelineCard({ feature, Icon }: TimelineCardProps) {
  return (
    <div
      className="group relative w-full md:max-w-[420px] bg-[#060a12] border border-blue-500/15 rounded-2xl p-6 overflow-hidden
        hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1
        transition-all duration-300 ease-out cursor-default"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-blue-500/30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-blue-500/30 rounded-tr-2xl" />
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start gap-4">
        {/* Icon badge */}
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700
          flex items-center justify-center
          shadow-md shadow-blue-500/30
          group-hover:scale-110 group-hover:shadow-blue-500/50 group-hover:shadow-lg
          transition-all duration-300">
          <Icon className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-white font-semibold text-base leading-snug group-hover:text-blue-300 transition-colors duration-300">
              {feature.title}
            </h3>
            <span className="flex-shrink-0 text-[11px] bg-blue-500/15 text-blue-400 border border-blue-500/25 px-2 py-0.5 rounded-full font-medium">
              {feature.highlight}
            </span>
          </div>
          {/* Description */}
          <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}


export default WhyChooseSection;
