import Container from "@/components/ui/container";
import Image from "next/image";
import { instructor } from "@/assets/images";
import Link from "next/link";

const InstructorSection = () => {
    return (
         <section className="relative bg-[#060a12] overflow-hidden">
        {/* Dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glows */}
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        {/* Edge separators */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <Container className="relative z-10 py-20 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90">Lead Instructor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-0">

            {/* — Left: photo — */}
              <div className="flex justify-center lg:justify-start lg:pl-8 xl:pl-16">
                                {/* Double-layer square + circular photo stack */}
                                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
        
                                    {/* Enhanced Background Glows */}
                                    <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50 animate-pulse" />
        
                                    {/* Layer 1 — outermost square, subtle rotation, centered */}
                                    <div className="absolute inset-0 rounded-[3rem] rotate-[8deg] scale-[0.88]
                                        bg-gradient-to-br from-blue-500/10 via-transparent to-transparent
                                        border border-blue-500/20
                                        shadow-[0_0_40px_hsl(217_91%_60%/0.15)] ">
                                        {/* Corner accents — all 4 corners */}
                                        <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-blue-500/40 rounded-tl-[3rem]" />
                                        <div className="absolute top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-blue-500/40 rounded-tr-[3rem]" />
                                        <div className="absolute bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-blue-500/40 rounded-bl-[3rem]" />
                                        <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-blue-500/40 rounded-br-[3rem]" />
                                    </div>
        
                                    {/* Layer 2 — inner square, counter-rotated for balance */}
                                    <div className="absolute inset-0 rounded-[3rem] rotate-[-4deg] scale-[0.94]
                                        bg-gradient-to-br from-blue-500/15 via-[#060f0a]/80 to-blue-500/5
                                        border border-blue-500/30 backdrop-blur-sm
                                        shadow-[0_0_50px_hsl(217_91%_60%/0.25),inset_0_1px_0_hsl(217_91%_60%/0.2)] ">
                                        {/* Corner accents — all 4 corners */}
                                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/60 rounded-tl-[3rem]" />
                                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/60 rounded-tr-[3rem]" />
                                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/60 rounded-bl-[3rem]" />
                                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/60 rounded-br-[3rem]" />
                                        {/* Top shimmer line */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent rounded-t-[3rem]" />
                                    </div>
        
                                    {/* Circular photo — conic-spin border on top */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative p-[3px] rounded-full overflow-hidden w-[85%] h-[85%]
                                            shadow-[0_0_70px_hsl(217_91%_60%/0.4)] ring-1 ring-blue-500/20">
                                            <span className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_50%,hsl(217_91%_60%/1)_70%,transparent_100%)]" />
                                            <span className="absolute inset-[-100%] animate-[spin_10s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_70%,hsl(217_85%_70%/0.6)_90%,transparent_100%)]" />
                                            <div className="relative rounded-full overflow-hidden w-full h-full bg-[#060f0a] p-[4px]">
                                                <div className="relative rounded-full overflow-hidden w-full h-full ring-1 ring-white/10">
                                                    <Image
                                                        src={instructor}
                                                        alt="Puspita Singha — Lead Instructor"
                                                        fill
                                                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 450px"
                                                        priority
                                                    />
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/30 via-transparent to-transparent" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        
                                    {/* Floating accent particles */}
                                    <div className="absolute top-1/4 -right-12 space-y-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-500/60 blur-[1px] animate-pulse" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 ml-4 animate-bounce" />
                                        <div className="w-2 h-2 rounded-full bg-blue-500/40 -ml-2" />
                                    </div>
                                    <div className="absolute bottom-1/4 -left-12 space-y-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 blur-[1px]" />
                                        <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse ml-4" style={{ animationDelay: '0.5s' }} />
                                    </div>
                                </div>
                            </div>

            {/* — Right: bio — */}
            <div className="flex flex-col gap-6">
              {/* Name + title */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                  Puspita Singha
                </h2>
                <p className="text-blue-400/80 font-semibold text-sm tracking-wide mt-1 uppercase">
                  Lead Instructor — English For Professional Communication
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "100+", label: "Classes Delivered" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-0.5 px-4 py-3 rounded-xl border border-blue-500/20 bg-blue-500/5">
                    <span className="text-2xl font-black text-blue-400">{s.value}</span>
                    <span className="text-[10px] text-white/45 uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <p className="text-white/60 text-[15px] leading-relaxed max-w-lg">
                Puspita Singha is an experienced English Language Trainer specializing in professional communication, public speaking, and business English. Her interactive teaching methods help students quickly gain confidence.
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {["Business English", "Public Speaking", "Interview Prep", "Email Writing", "Presentation Skills", "Accent Training"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300/80 border border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div>
                <Link href="/checkout?course=english-for-professional-communication">
                  <div className="inline-block relative p-[1.5px] rounded-xl overflow-hidden">
                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
                    <button className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 transition-all duration-300 text-white font-bold text-base px-8 py-3 rounded-xl shadow-[0_0_24px_hsl(217_91%_60%/0.4)] hover:shadow-[0_0_36px_hsl(217_91%_60%/0.6)] cursor-pointer">
                      Enroll Now
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
};

export default InstructorSection;