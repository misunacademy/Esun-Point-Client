export default function FooterTopSeparator() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-blue-500/15 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-b from-blue-500/40 to-transparent" />
      <div
        className="absolute top-0 h-px w-40 opacity-90"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(217 85% 70%), transparent)',
          animation: 'shimmer-line 3s linear infinite',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="absolute w-7 h-7 rounded-full border border-blue-500/30 animate-ping opacity-30" />
        <div className="absolute w-5 h-5 rounded-full border border-blue-500/50" />
        <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-800 shadow-[0_0_12px_hsl(217_91%_60%),0_0_24px_hsl(217_91%_60%/0.5)]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-0">
        <div className="w-32 h-px bg-gradient-to-l from-blue-500/70 to-transparent" />
        <div className="w-4" />
        <div className="w-32 h-px bg-gradient-to-r from-blue-500/70 to-transparent" />
      </div>
    </div>
  );
}
