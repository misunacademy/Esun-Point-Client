import { Loader2 } from "lucide-react";

export default function RouteLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#060f0a]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-sm text-white/40 font-medium">Loading...</p>
      </div>
    </div>
  );
}
