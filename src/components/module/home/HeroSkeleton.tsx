import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading hero section"
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 pb-16 bg-[#0a1526]"
    >
      <div className="absolute inset-0 bg-[#0a1526]" />
      <div className="relative z-10 w-full container mx-auto px-4 max-w-7xl flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
          <Skeleton className="h-8 w-[260px] rounded-full bg-white/10 mb-6" />
          <Skeleton className="h-12 sm:h-14 md:h-[72px] w-[420px] max-w-full rounded-lg bg-white/10" />
          <Skeleton className="h-12 sm:h-14 md:h-[72px] w-[360px] max-w-full rounded-lg bg-white/5 mt-3 mb-6" />
          <div className="w-full max-w-3xl space-y-2.5 flex flex-col items-center">
            <Skeleton className="h-4 w-full rounded bg-white/5" />
            <Skeleton className="h-4 w-[92%] rounded bg-white/5" />
            <Skeleton className="h-4 w-[78%] rounded bg-white/5" />
          </div>
          <Skeleton className="h-12 w-[160px] rounded-full bg-white/10 mt-8" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-4 mb-20 flex justify-center">
          <div className="relative z-20 w-[280px] sm:w-[350px] md:w-[550px] aspect-[3/4] -mt-32 sm:-mt-56">
            <Skeleton className="w-full h-full rounded-2xl bg-white/[0.06] border border-white/5" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <Skeleton className="h-8 w-[220px] rounded-full bg-black/40 border border-white/10" />
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/4 left-[5%] xl:left-0 bg-[#0a1526]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full bg-white/10 shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-2.5 w-12 rounded bg-white/5" />
              <Skeleton className="h-3.5 w-[140px] rounded bg-white/10" />
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/3 right-[5%] xl:right-0 bg-[#0a1526]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full bg-white/10 shrink-0" />
            <div className="space-y-2">
              <Skeleton className="h-2.5 w-14 rounded bg-white/5" />
              <Skeleton className="h-3.5 w-[120px] rounded bg-white/10" />
            </div>
          </div>

          <div className="md:hidden absolute top-[20%] left-[5%]">
            <Skeleton className="w-12 h-12 rounded-full bg-white/10" />
          </div>
          <div className="md:hidden absolute top-[15%] right-[5%]">
            <Skeleton className="w-12 h-12 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex flex-col items-center text-center"
              >
                <Skeleton className="w-14 h-14 rounded-full bg-white/10 mb-4" />
                <Skeleton className="h-5 w-[140px] rounded bg-white/10 mb-2" />
                <div className="w-full space-y-2 flex flex-col items-center">
                  <Skeleton className="h-3 w-full rounded bg-white/5" />
                  <Skeleton className="h-3 w-[88%] rounded bg-white/5" />
                  <Skeleton className="h-3 w-[72%] rounded bg-white/5 hidden sm:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
