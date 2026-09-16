import { memo } from 'react';

function CourseBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
      </span>
      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90" role="status">
        English For Professional Communication
      </span>
    </div>
  );
}

export default memo(CourseBadge);
