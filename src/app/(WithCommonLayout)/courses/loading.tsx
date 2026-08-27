import { Skeleton } from "@/components/ui/skeleton"

export default function CoursesLoading() {
  return (
    <div className="min-h-screen">
      <section
        aria-busy="true"
        aria-label="Loading course banner"
        className="relative bg-[#060a12] overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-28 pb-24 px-4">
          <Skeleton className="h-7 w-[200px] rounded-full bg-white/10 mb-6" />
          <div className="flex flex-col items-center space-y-3 w-full max-w-3xl">
            <Skeleton className="h-10 md:h-12 w-[620px] max-w-[90vw] rounded-lg bg-white/10" />
            <Skeleton className="h-7 w-[160px] rounded-lg bg-white/5" />
          </div>
          <div className="mt-6 w-full max-w-3xl flex flex-col items-center space-y-2">
            <Skeleton className="h-4 w-full max-w-xl rounded bg-white/5" />
            <Skeleton className="h-4 w-[88%] max-w-xl rounded bg-white/5" />
          </div>
          <div className="flex gap-3 sm:gap-4 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-white/10" />
            ))}
          </div>
          <Skeleton className="h-[56px] w-[240px] rounded-xl bg-blue-500/20 mt-6" />
          <Skeleton className="h-[84px] w-[320px] md:w-[640px] rounded-2xl bg-white/5 border border-white/10 mt-6" />
          <Skeleton className="h-12 w-[160px] rounded-xl bg-blue-500/20 mt-8" />
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <Skeleton className="h-64 w-full rounded-xl bg-white/5" />
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  )
}
