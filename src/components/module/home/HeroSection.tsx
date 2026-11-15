import Image from 'next/image';
import instructor from '@/assets/images/instructor.png';
import hero_section from '@/assets/images/hero_back.png';
import { Globe, Video, UserCheck, Clock, MessageCircle, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import AnimatedButton from '@/components/shared/AnimatedButton';
import { HeroFeatureCard } from './HeroFeatureCard';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 pb-16 bg-surface-deep">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={hero_section}
          alt=""
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
      </div>

      <div className="relative z-10 w-full container mx-auto px-4 max-w-7xl flex flex-col items-center">
        <FadeIn delay={0.1} direction="up" className="relative z-30 text-center max-w-4xl mx-auto mb-10">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles size={16} /> Global Standard English Course
            </span>
          </div>

          <h1 className="text-hero font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Master English <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent pb-2">
              With Confidence
            </span>
          </h1>

          <p className="text-blue-100/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-8">
            Strong communication is your most valuable asset. Build practical skills for workplace meetings, presentations, and interviews with expert guidance from <strong className="text-white font-medium">Esun Point</strong>.
          </p>

          <AnimatedButton href="/checkout">
            Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" className="relative w-full max-w-5xl mx-auto mt-2 mb-16 flex justify-center">
          <div className="relative z-20 w-[240px] min-[400px]:w-[280px] sm:w-[350px] md:w-[520px] aspect-[3/4] transition-transform duration-700 hover:scale-[1.02] -mt-10 sm:-mt-24 md:-mt-44">
            <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_88%,transparent)]">
              <Image
                src={instructor}
                alt="Esun Point - English Instructor"
                fill
                sizes="(max-width: 640px) 280px, 520px"
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                priority
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/10 px-5 py-1.5 rounded-full whitespace-nowrap shadow-2xl">
              <p className="text-white font-bold text-xs sm:text-sm">Esun Point <span className="text-cyan-400 font-normal ml-2">Lead Instructor</span></p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/4 left-[5%] xl:left-0 bg-surface-deep/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 animate-[bounce_6s_infinite_ease-in-out]">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Reach</p>
              <p className="text-sm font-bold text-white">Global Communication</p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/3 right-[5%] xl:right-0 bg-surface-deep/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 animate-[bounce_5s_infinite_ease-in-out_1s]">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <Mic size={20} />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Practice</p>
              <p className="text-sm font-bold text-white">Speak Fluently</p>
            </div>
          </div>

          <div className="md:hidden absolute top-[5%] left-[2%] w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-xl animate-[bounce_6s_infinite_ease-in-out]">
            <Globe size={18} />
          </div>
          <div className="md:hidden absolute top-[8%] right-[2%] w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 shadow-xl animate-[bounce_5s_infinite_ease-in-out_1s]">
            <MessageCircle size={18} />
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up" className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <HeroFeatureCard
              icon={<UserCheck size={24} />}
              title="Expert Mentorship"
              description="Personalized step-by-step guidance to build your confidence and refine your English skills."
              accent="blue"
            />
            <HeroFeatureCard
              icon={<Video size={24} />}
              title="Interactive Live Classes"
              description="Engage in real-time practice sessions focusing on workplace communication scenarios."
              accent="cyan"
            />
            <HeroFeatureCard
              icon={<Clock size={24} />}
              title="Lifetime Access"
              description="Review course recordings and access updated learning materials whenever you need them."
              accent="indigo"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
