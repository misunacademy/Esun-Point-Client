import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillBadgeProps {
    icon: React.ReactNode;
    name: string;
    delay?: number;
}

export default function SkillBadge({ icon, name, delay = 0 }: SkillBadgeProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="group relative cursor-pointer"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/15 blur-xl opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100" />
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/[0.1] bg-blue-500/[0.05] backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-blue-500/[0.35] group-hover:bg-blue-500/[0.12] group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)] z-10 text-blue-400">
                            {icon}
                        </div>
                    </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="rounded-lg border border-blue-500/[0.15] bg-[#060a12] px-3 py-1.5 font-medium text-blue-400 shadow-xl">
                    <p>{name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
