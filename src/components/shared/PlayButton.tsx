import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "default" | "glass" | "gradient";
    className?: string;
    onClick?: () => void;
    isPlaying?: boolean;
    decorative?: boolean;
}

const PlayButton = ({
    size = "md",
    variant = "default",
    className,
    onClick,
    isPlaying = false,
    decorative = false
}: PlayButtonProps) => {
    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-16 h-16",
        lg: "w-20 h-20",
        xl: "w-24 h-24"
    };

    const iconSizes = {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-9 h-9",
        xl: "w-11 h-11"
    };

    const baseClasses = cn(
        "relative flex items-center justify-center rounded-full cursor-pointer",
        "transition-all duration-300 ease-out",
        "group overflow-hidden",
        sizeClasses[size]
    );

    const variantClasses = {
        default: cn(
            "bg-[#060a12] backdrop-blur-sm border border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
            "hover:shadow-[0_12px_40px_rgba(220,38,38,0.4)]",
            "hover:bg-[#060a12]/80",
            "active:scale-95"
        ),
        glass: cn(
            "bg-white/[0.10] backdrop-blur-md border border-white/20",
            "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
            "hover:bg-white/[0.15]",
            "hover:shadow-[0_12px_40px_rgba(220,38,38,0.3)]",
            "active:scale-95"
        ),
        gradient: cn(
            "bg-gradient-to-br from-red-500 to-red-600",
            "shadow-[0_8px_32px_rgba(220,38,38,0.4)]",
            "hover:from-red-400 hover:to-red-500",
            "hover:shadow-[0_12px_40px_rgba(220,38,38,0.6)]",
            "hover:scale-105",
            "active:scale-100"
        )
    };

    const iconColorClasses = {
        default: "text-red-400 group-hover:text-red-300",
        glass: "text-white group-hover:text-red-100",
        gradient: "text-white"
    };

    const inner = (
        <>
            <div
                className={cn(
                    "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100",
                    "bg-gradient-to-r from-red-400/50 to-red-600/50",
                    "animate-play-glow transition-opacity duration-300",
                    "blur-xl scale-110"
                )}
            />

            {isPlaying && (
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-play-pulse" />
            )}

            <div className="relative z-10 flex items-center justify-center">
                <Play
                    className={cn(
                        iconSizes[size],
                        iconColorClasses[variant],
                        "transition-all duration-300",
                        "transform group-hover:scale-110",
                        "ml-0.5"
                    )}
                    fill="currentColor"
                    aria-hidden="true"
                />
            </div>

            <div className="absolute inset-0 rounded-full bg-red-500/20 scale-0 group-active:scale-100 transition-transform duration-150" />
        </>
    );

    if (decorative) {
        return (
            <span className={cn(baseClasses, variantClasses[variant], className)} aria-hidden="true">
                {inner}
            </span>
        );
    }

    return (
        <div className="relative">
            <button
                type="button"
                className={cn(
                    baseClasses,
                    variantClasses[variant],
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500/30",
                    className
                )}
                onClick={onClick}
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {inner}
            </button>
        </div>
    );
};

export default PlayButton;
