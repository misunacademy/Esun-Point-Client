'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
import WhyThisCourseModal from './WhyThisCourseModal';
import { VideoThumb } from '@/assets/images';
import { FolderArchive, NotebookPen, Projector } from 'lucide-react';
import PlayButton from '@/components/shared/PlayButton';
import { DotGrid, AmbientGlow, SectionBorder } from "@/components/shared/Decorative";
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerContainer } from '@/components/ui/StaggerContainer';
import StatCard from '@/components/module/course/english/StatCard';

const stats = [
  { icon: <Projector size={28} />, target: 30, suffix: '+', label: 'Live Classes' },
  { icon: <NotebookPen size={28} />, target: 20, suffix: '+', label: 'Real Conversation Practices' },
  { icon: <FolderArchive size={28} />, target: 90, suffix: '+', label: 'Communication Support Classes' },
];

export default function WhyThisCourse() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section data-dark-section className="relative overflow-hidden bg-surface-deep">
      <SectionBorder position="top" />
      <DotGrid className="opacity-[0.18]" />
      <AmbientGlow className="top-[-80px] left-1/2 -translate-x-1/2" color="bg-blue-500/12" size="w-[520px] h-[260px]" blur="blur-[100px]" />
      <AmbientGlow className="bottom-0 left-[10%]" color="bg-blue-500/8" size="w-[300px] h-[200px]" blur="blur-[80px]" />
      <AmbientGlow className="bottom-0 right-[10%]" color="bg-blue-500/6" size="w-[260px] h-[180px]" blur="blur-[70px]" />

      <Container className="relative z-10 py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase text-blue-400/90">Course Overview</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide pt-2 bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              Why Should You{' '}
              <span className="relative inline-block pt-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                Take This Course
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0" />
              </span>
              ?
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/60" />
              <div className="h-px w-32 bg-gradient-to-r from-blue-500/60 to-blue-500/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              <div className="h-px w-16 bg-gradient-to-r from-blue-500/20 to-transparent" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="relative mt-10 md:mt-14 mx-auto w-full max-w-4xl">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl scale-105 pointer-events-none" />
            <div className="relative p-[2px] rounded-2xl overflow-hidden w-full aspect-video mx-auto">
              <span
                className="absolute inset-[-100%] animate-[spin_6s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 90deg, transparent 20%, hsl(217 91% 60% / 0.5) 38%, hsl(217 85% 70%) 50%, hsl(217 91% 60% / 0.5) 62%, transparent 80%)',
                }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden group border border-white/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <WhyThisCourseModal>
                  <button
                    type="button"
                    aria-label="Play the course overview video"
                    className="relative block w-full h-full cursor-pointer transform group-hover:scale-105 transition-transform duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    <Image
                      src={VideoThumb}
                      alt="Course overview video thumbnail"
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      quality={75}
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <PlayButton size="lg" variant="gradient" decorative className="group-hover:scale-110 transition-transform duration-300 animate-glow" />
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 rounded-2xl pointer-events-none" />
                  </button>
                </WhyThisCourseModal>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 md:mt-16 flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500/40" />
            <div className="w-2 h-2 rounded-full bg-blue-500/70" />
            <div className="w-2 h-2 rounded-full bg-blue-500/40" />
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div ref={sectionRef}>
          <StaggerContainer className="font-monaExpanded max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                icon={stat.icon}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                animate={animate}
                delay={i * 120}
              />
            ))}
          </StaggerContainer>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
