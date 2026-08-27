export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-[0.03] pointer-events-none ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}

interface AmbientGlowProps {
  className?: string;
  color?: string;
  size?: string;
  blur?: string;
  extra?: string;
  style?: React.CSSProperties;
}

export function AmbientGlow({
  className = "",
  color = "bg-blue-500/10",
  size = "w-[500px] h-[500px]",
  blur = "blur-[120px]",
  extra = "",
  style,
}: AmbientGlowProps) {
  return (
    <div
      className={`absolute ${size} ${color} rounded-full ${blur} pointer-events-none ${extra} ${className}`}
      style={style}
    />
  );
}

interface SectionBorderProps {
  className?: string;
  color?: string;
  position?: "both" | "top" | "bottom";
}

export function SectionBorder({ className = "", color = "via-blue-500/40", position = "both" }: SectionBorderProps) {
  return (
    <>
      {position !== "bottom" && (
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${color} to-transparent ${className}`} />
      )}
      {position !== "top" && (
        <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${color} to-transparent ${className}`} />
      )}
    </>
  );
}

export function CornerAccent({ className = "" }: { className?: string }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/40 rounded-tl-2xl ${className}`} />
      <div className={`absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/40 rounded-tr-2xl ${className}`} />
    </>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent ${className}`} />;
}

export function SpinnerIcon({ className = "h-5 w-5 text-white" }: { className?: string }) {
  return (
    <svg className={`animate-spin -ml-1 mr-3 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
