import { Target, Eye, ArrowRight } from "lucide-react";

const missionItems = [
  "Teaching international standard digital skills to the youth of Bangladesh.",
  "Providing hands-on learning experiences.",
  "Building confidence to build freelancing and remote careers.",
  "Building a technology-driven, self-reliant generation.",
];

export function MissionSection() {
  return (
    <section className="relative bg-[#060a0f] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1620] via-[#0d1c2b] to-[#060a0f] border border-primary/25 p-10 shadow-[0_0_50px_hsl(217_70%_42%/0.12)] transition-all duration-300 hover:shadow-[0_0_70px_hsl(217_70%_42%/0.22)] hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8">
              <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden mb-5">
                <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
                <div className="relative w-16 h-16 rounded-full bg-[#0a1620] flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Mission</span>
              </h3>
              <p className="text-primary/70 text-sm font-semibold mt-2 tracking-wide uppercase">Skill First, Career Next.</p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

            <p className="text-white/55 text-sm mb-6">Our mission is:</p>
            <ul className="space-y-4">
              {missionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center mt-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-white/65 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1620] via-[#0d1c2b] to-[#060a0f] border border-primary/25 p-10 shadow-[0_0_50px_hsl(217_70%_42%/0.12)] transition-all duration-300 hover:shadow-[0_0_70px_hsl(217_70%_42%/0.22)] hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-3xl" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8">
              <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden mb-5">
                <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_180deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
                <div className="relative w-16 h-16 rounded-full bg-[#0a1620] flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">Our </span>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">Vision</span>
              </h3>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

            <p className="text-white/55 text-sm mb-6">Our vision is:</p>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              To ensure affordable, quality, and relevant digital education for everyone, which can guide them towards an independent and self-reliant life.
            </p>

            <div className="relative overflow-hidden rounded-2xl bg-primary/8 border border-primary/20 p-6">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 rounded-tr-2xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <p className="text-sm text-white/60 leading-relaxed text-center italic">
                We want to build a community where learning is not just about getting a certificate, but acquiring real-world practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
