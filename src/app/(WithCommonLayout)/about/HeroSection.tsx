import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#060a0f] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-primary/7 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-28 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative p-[1.5px] rounded-full overflow-hidden">
            <span className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_70%_42%)_100%)]" />
            <div className="relative w-20 h-20 rounded-full bg-[#060a0f] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/90">ESUN POINT</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-[140%] mb-6">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">About </span>
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-[0_0_24px_hsl(217_70%_42%/0.5)]">Us</span>
        </h1>

        <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
          New horizons in digital education for future generations
        </p>

        <div className="flex items-center gap-3 w-full max-w-xs mx-auto mt-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>
    </section>
  );
}
