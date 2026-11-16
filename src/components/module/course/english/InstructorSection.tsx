import Container from "@/components/ui/container";
import Image from "next/image";
import { instructor } from "@/assets/images";
import { DotGrid, AmbientGlow, SectionBorder } from "@/components/shared/Decorative";
import { EnrollNowButton } from "@/components/shared/EnrollNowButton";

export default function InstructorSection() {
  return (
    <section className="relative bg-surface-deep overflow-hidden">
      <DotGrid className="opacity-[0.04]" />
      <AmbientGlow className="-top-24 left-1/4" color="bg-blue-500/6" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <SectionBorder />

      <Container className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90">Lead Instructor</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center lg:justify-start lg:pl-8 xl:pl-16">
            <div className="relative w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50 animate-pulse" />

              <div className="absolute inset-0 rounded-[3rem] rotate-[8deg] scale-[0.88] bg-gradient-to-br from-blue-500/10 via-transparent to-transparent border border-blue-500/20 shadow-[0_0_40px_hsl(217_91%_60%/0.15)]">
                <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-blue-500/40 rounded-tl-[3rem]" />
                <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-blue-500/40 rounded-tr-[3rem]" />
                <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-blue-500/40 rounded-bl-[3rem]" />
                <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-blue-500/40 rounded-br-[3rem]" />
              </div>

              <div className="absolute inset-0 rounded-[3rem] rotate-[-4deg] scale-[0.94] bg-gradient-to-br from-blue-500/15 via-[#060f0a]/80 to-blue-500/5 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_50px_hsl(217_91%_60%/0.25),inset_0_1px_0_hsl(217_91%_60%/0.2)]">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/60 rounded-tl-[3rem]" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/60 rounded-tr-[3rem]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/60 rounded-bl-[3rem]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/60 rounded-br-[3rem]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent rounded-t-[3rem]" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative p-[3px] rounded-full overflow-hidden w-[85%] h-[85%] shadow-[0_0_70px_hsl(217_91%_60%/0.4)] ring-1 ring-blue-500/20">
                  <span className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_50%,hsl(217_91%_60%/1)_70%,transparent_100%)]" />
                  <span className="absolute inset-[-100%] animate-[spin_10s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.6)_90%,transparent_100%)]" />
                  <div className="relative rounded-full overflow-hidden w-full h-full bg-surface p-[4px]">
                    <div className="relative rounded-full overflow-hidden w-full h-full ring-1 ring-white/10">
                      <Image
                        src={instructor}
                        alt="Puspita Singha — Lead Instructor"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 450px"
                        priority
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-1/4 -right-8 space-y-4">
                <div className="w-2 h-2 rounded-full bg-blue-500/60 blur-[1px] animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 ml-4 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-500/40 -ml-2" />
              </div>
              <div className="hidden sm:block absolute bottom-1/4 -left-8 space-y-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 blur-[1px]" />
                <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse ml-4" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                Puspita Singha
              </h2>
              <p className="text-blue-400/80 font-semibold text-xs sm:text-sm tracking-wide mt-1 uppercase">
                Lead Instructor — English For Professional Communication
              </p>
            </div>

            <div className="flex gap-4 sm:gap-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "100+", label: "Classes Delivered" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 px-4 py-3 rounded-xl border border-blue-500/20 bg-blue-500/5">
                  <span className="text-2xl font-black text-blue-400">{s.value}</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              Puspita Singha is an experienced English Language Trainer specializing in professional communication, public speaking, and business English. Her interactive teaching methods help students quickly gain confidence.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Business English", "Public Speaking", "Interview Prep", "Email Writing", "Presentation Skills", "Accent Training"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300/90 border border-blue-500/20">
                  {skill}
                </span>
              ))}
            </div>

            <div>
              <EnrollNowButton courseSlug="english-for-professional-communication" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
