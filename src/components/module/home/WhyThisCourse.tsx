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
    <section data-dark-section className="relative overflow-hidden bg-[#060a12]">
      <SectionBorder position="top" />
      <DotGrid className="opacity-[0.18]" />
      <AmbientGlow className="top-[-80px] left-1/2 -translate-x-1/2" color="bg-blue-500/12" size="w-[520px] h-[260px]" blur="blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[200px] bg-blue-500/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[260px] h-[180px] bg-blue-500/6 rounded-full blur-[70px] pointer-events-none" />

      <Container className="relative z-10 py-24 max-w-7xl mx-auto">
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
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide pt-2 bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
              Why Should You{' '}
              <span className="relative inline-block pt-3 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                Take This Course
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0" />
              </span>
              ?
            </h1>
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
          <div className="relative mt-14 mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl scale-105 pointer-events-none" />
            <div className="relative p-[2px] rounded-2xl overflow-hidden w-[360px] md:w-full h-[504px] lg:h-full aspect-[2.16/1] mx-auto">
              <span
                className="absolute inset-[-100%] animate-[spin_6s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 90deg, transparent 20%, hsl(217 91% 60% / 0.5) 38%, hsl(217 85% 70%) 50%, hsl(217 91% 60% / 0.5) 62%, transparent 80%)',
                }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <WhyThisCourseModal>
                  <div className="relative grid grid-cols-2 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                    <Image
                      src={VideoThumb}
                      alt="Course overview video thumbnail"
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      quality={65}
                      loading="lazy"
                      className="object-cover object-center sm:object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-[#060a12]/20 to-transparent pointer-events-none rounded-2xl" />
                    <div className="flex items-center justify-center relative z-10">
                      <PlayButton size="lg" variant="gradient" className="hidden md:block group-hover:scale-110 transition-transform duration-300 animate-glow" />
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 rounded-2xl pointer-events-none" />
                  </div>
                </WhyThisCourseModal>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500/40" />
            <div className="w-2 h-2 rounded-full bg-blue-500/70" />
            <div className="w-2 h-2 rounded-full bg-blue-500/40" />
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        <div ref={sectionRef}>
          <StaggerContainer className="font-monaExpanded max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
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
