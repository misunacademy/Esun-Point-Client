import { memo } from 'react';

function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#060f0a]">
      <div className="text-center space-y-5">
        <div className="relative p-[1.5px] rounded-full overflow-hidden w-16 h-16 mx-auto" role="status" aria-label="Loading">
          <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
          <div className="relative w-full h-full rounded-full bg-[#060f0a] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        </div>
        <p className="text-white/50 text-sm tracking-wide font-bangla">Loading...</p>
      </div>
    </div>
  );
}

export default memo(Spinner);
