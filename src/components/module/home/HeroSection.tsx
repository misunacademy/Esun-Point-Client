import Image from 'next/image';
import instructor from '@/assets/images/instructor.png';
import hero_section from '@/assets/images/hero_back.png';
import { Globe, Video, UserCheck, Clock, MessageCircle, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

export default function HeroSection() {

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 pb-16"
      style={{
        backgroundColor: '#0a1526', // Deep elegant navy
      }}
    >
      {/* ── Background Overlays ── */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={hero_section}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Radial Gradient Glows */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" /> */}

      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" /> */}


      <div className="relative z-10 w-full container mx-auto px-4 max-w-7xl flex flex-col items-center">

        {/* ── Top Section: Heading & Text ── */}
        <FadeIn delay={0.1} direction="up" className="text-center max-w-4xl mx-auto mb-12">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles size={16} /> Global Standard English Course
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] font-sans">
            Master English <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent pb-2">
              With Confidence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-blue-100/70 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light mb-8">
            Strong communication is your most valuable asset. Build practical skills for workplace meetings, presentations, and interviews with expert guidance from <strong className="text-white font-medium">Esun Point</strong>.
          </p>

          {/* Call to Action */}
          {/* <div className="flex justify-center">
            <Link href="/enroll">
              <button className="relative group rounded-full cursor-pointer z-50 p-[2px] overflow-hidden transition-all duration-300 hover:scale-105 bg-blue-500/30">

                Animated Gradient Border
                <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#1e40af,#38bdf8)] animate-spin-slow"></span>

                Inner Button
                <span className="relative flex items-center gap-3 px-10 py-4 bg-[#081426] rounded-full ">
                  <span className="text-white font-semibold text-lg">
                    Enroll Now
                  </span>

                  <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform group-hover:translate-x-1" />
                </span>

              </button>
            </Link>
          </div> */}
        
                <Link href="/checkout" className="w-full sm:w-auto block" aria-label="Enroll now">
          <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden
                              shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                              hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                              hover:scale-105 hover:-translate-y-0.5
                              active:scale-95 active:translate-y-0
                              transition-all duration-300 ease-out z-50">
            {/* Rotating conic-gradient border */}
            <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
            <button className="group relative overflow-hidden
                                inline-flex items-center gap-2
                                px-10 py-4 cursor-pointer
                                text-sm font-bold tracking-wide rounded-full
                                bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600
                                text-white
                                hover:from-blue-600 hover:via-blue-400 hover:to-blue-600
                                transition-all duration-300 ease-out">
              <span className="text-white font-semibold text-lg">
                Enroll Now
              </span>

              <ArrowRight className="w-5 h-5 hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
              {/* Shine sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>
          </div>
                </Link>
        </FadeIn>


        {/* ── Center Section: Main Visual ── */}
        <FadeIn delay={0.3} direction="up" className="relative w-full max-w-5xl mx-auto mt-4 mb-20 flex justify-center">

          {/* Massive Background Glow behind the center visual */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" /> */}

          {/* Rotating Globe Element (Center Background) */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] aspect-square flex items-center justify-center opacity-30 mix-blend-screen -z-10">
             <Globe className="w-full h-full text-blue-400 animate-[spin_60s_linear_infinite]" strokeWidth={0.5} />
             <div className="absolute inset-0 border-[1px] border-dashed border-cyan-500/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </div> */}

          {/* The Instructor Image */}
          <div className="relative z-10 w-[280px] sm:w-[350px] md:w-[550px] aspect-[3/4] transition-transform duration-700 hover:scale-[1.02] -mt-32 sm:-mt-56">
            <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_90%,transparent)]">
              <Image
                src={instructor}
                alt="Esun Point - English Instructor"
                fill
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
                priority
                // drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                className=""
              />
            </div>
            {/* Name Plate */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full whitespace-nowrap shadow-2xl">
              <p className="text-white font-bold text-sm">Esun Point <span className="text-cyan-400 font-normal ml-2">Lead Instructor</span></p>
            </div>
          </div>

          {/* Floating UI Elements (Absolute Positioning around the center) */}

          {/* Left Floating Card */}
          <div className="hidden md:flex absolute top-1/4 left-[5%] xl:left-0 bg-[#0a1526]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 animate-[bounce_6s_infinite_ease-in-out]">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Reach</p>
              <p className="text-sm font-bold text-white">Global Communication</p>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden md:flex absolute top-1/3 right-[5%] xl:right-0 bg-[#0a1526]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl items-center gap-4 animate-[bounce_5s_infinite_ease-in-out_1s]">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <Mic size={20} />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Practice</p>
              <p className="text-sm font-bold text-white">Speak Fluently</p>
            </div>
          </div>

          {/* Mobile Floating Icons */}
          <div className="md:hidden absolute top-[20%] left-[5%] w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-xl animate-[bounce_6s_infinite_ease-in-out]">
            <Globe size={20} />
          </div>
          <div className="md:hidden absolute top-[15%] right-[5%] w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 shadow-xl animate-[bounce_5s_infinite_ease-in-out_1s]">
            <MessageCircle size={20} />
          </div>

        </FadeIn>


        {/* ── Bottom Section: Core Features ── */}
        <FadeIn delay={0.5} direction="up" className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

            {/* Feature 1 */}
            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-3xl transition-colors hover:bg-white/[0.04] hover:border-white/10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <UserCheck size={24} />
              </div>
              <h2 className="text-white font-bold text-lg mb-2">Expert Mentorship</h2>
              <p className="text-white/50 text-sm leading-relaxed">Personalized step-by-step guidance to build your confidence and refine your English skills.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-3xl transition-colors hover:bg-white/[0.04] hover:border-white/10 text-center flex flex-col items-center relative overflow-hidden">
              {/* Highlight Glow inside this specific card to make it pop slightly more */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/5 blur-xl pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 relative z-10">
                <Video size={24} />
              </div>
              <h2 className="text-white font-bold text-lg mb-2 relative z-10">Interactive live Classes</h2>
              <p className="text-white/50 text-sm leading-relaxed relative z-10">Engage in real-time practice sessions focusing on workplace communication scenarios.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6 rounded-3xl transition-colors hover:bg-white/[0.04] hover:border-white/10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h2 className="text-white font-bold text-lg mb-2">Lifetime Access</h2>
              <p className="text-white/50 text-sm leading-relaxed">Review course recordings and access updated learning materials whenever you need them.</p>
            </div>

          </div>
        </FadeIn>

      </div>
    </div>
  );
}
