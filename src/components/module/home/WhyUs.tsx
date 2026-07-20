'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';
import { DotGrid, AmbientGlow, SectionBorder } from "@/components/shared/Decorative";
import AnimatedButton from '@/components/shared/AnimatedButton';
import TimelineList from './TimelineList';
import { stats } from '@/constants/whyUs';

const WhyChooseSection = () => {
  return (
    <section className="relative bg-[#060a12] overflow-hidden mb-0 py-24">
      <SectionBorder position="top" />
      <DotGrid className="opacity-[0.18]" />
      <AmbientGlow className="top-[-80px] left-1/2 -translate-x-1/2" color="bg-blue-500/12" size="w-[560px] h-[280px]" blur="blur-[110px]" />
      <div className="absolute top-1/3 left-[5%] w-[300px] h-[220px] bg-blue-500/7 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-[5%] w-[280px] h-[200px] bg-blue-500/6 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative max-w-7xl mx-auto px-4">
        <FadeIn className="text-center mb-14">
          <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full", "bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm mb-5")}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase text-blue-400/90">
              Premium English Communication Course
            </span>
          </div>
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-5", "bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent")}>
            Why Choose{' '}
            <span className={cn("relative inline-block", "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent")}>
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

        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={cn("flex items-center gap-4 bg-[#060a12] border border-blue-500/20 rounded-2xl px-6 py-4 min-w-[200px]", "hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300")}
              >
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

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(217 91% 60%) 8%, hsl(217 85% 70%) 50%, hsl(217 91% 60%) 92%, transparent)',
              boxShadow: '0 0 14px hsl(217 91% 60% / 0.6)',
            }}
          />
          <div className="absolute left-5 top-0 bottom-0 w-[2px] md:hidden"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(217 91% 60%) 5%, hsl(217 91% 60%) 95%, transparent)',
              boxShadow: '0 0 10px hsl(217 91% 60% / 0.5)',
            }}
          />

          <TimelineList />
        </div>

        <FadeIn delay={0.4} direction="up" className="text-center mt-20">
          <div className={cn("relative bg-[#060a12] border border-blue-500/20 rounded-3xl max-w-2xl mx-auto p-10 overflow-hidden", "hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500")}
            style={{ boxShadow: '0 0 60px hsl(217 91% 60% / 0.10)' }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/15 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/15 rounded-br-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6" />

            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Join hundreds of successful students and transform your communication skills with our complete English for Professional Communication program.
              Get lifetime access and an official certificate of completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton href="/checkout">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
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
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
};

export default WhyChooseSection;
