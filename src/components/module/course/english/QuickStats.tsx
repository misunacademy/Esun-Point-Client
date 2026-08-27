import { memo } from 'react';

const STATS = [
  { val: "3 Months", lbl: "Course Duration" },
  { val: "Live", lbl: "Interactive Classes" },
  { val: "24/7", lbl: "Support" },
  { val: "Certificate", lbl: "On Completion" },
];

function QuickStats() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-sm">
      {STATS.map((s) => (
        <div key={s.lbl} className="flex flex-col items-center gap-0.5">
          <span className="text-blue-400 font-bold text-base">{s.val}</span>
          <span className="text-white/45 text-xs">{s.lbl}</span>
        </div>
      ))}
    </div>
  );
}

export default memo(QuickStats);
