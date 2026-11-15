"use client";

import { motion } from "framer-motion";
import { Calendar, BookOpen, Video } from "lucide-react";

interface CurriculumModule {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  classes: string[];
}

interface CurriculumModuleCardProps {
  module: CurriculumModule;
  index: number;
  isLast: boolean;
  isFirst: boolean;
}

const railTransition = { duration: 0.6, ease: "easeOut" } as const;

export function CurriculumModuleCard({ module, index, isLast }: CurriculumModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 group"
    >
      <div className="relative hidden sm:flex w-20 flex-shrink-0 flex-col items-center">
        <div className="flex h-6 w-full justify-center">
          {index > 0 && (
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={railTransition}
              className="h-full w-px origin-bottom bg-gradient-to-b from-blue-500/10 to-blue-400/70"
            />
          )}
        </div>

        <div className="relative z-10 flex h-10 w-10 items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-px w-[4.5rem] -translate-y-1/2 bg-gradient-to-r from-blue-400/60 via-blue-400/30 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg transition-colors duration-500 group-hover:bg-blue-400/40"
          />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/40 bg-surface-deep shadow-[0_0_0_4px_#060a12,0_0_16px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-[0_0_0_4px_#060a12,0_0_24px_rgba(59,130,246,0.6)]">
            <span className="text-[11px] font-bold tracking-tight text-blue-300 transition-colors group-hover:text-blue-100">
              M{index + 1}
            </span>
          </span>
        </div>

        <div className="relative flex w-full flex-1 justify-center">
          {!isLast && (
            <>
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...railTransition, duration: 0.9, delay: 0.1 }}
                className="h-full w-px origin-top bg-gradient-to-b from-blue-400/70 via-purple-500/35 to-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.25)]"
              />
              <span
                aria-hidden="true"
                className="absolute top-full h-8 w-px bg-gradient-to-b from-blue-500/15 via-blue-400/30 to-blue-500/15"
              />
            </>
          )}
        </div>
      </div>

      <div className="flex-grow rounded-3xl bg-gradient-to-br from-[#0a1122]/90 to-surface-deep border border-white/[0.08] hover:border-blue-500/30 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  {module.id}
                </span>
                <span className="text-sm font-medium text-white/60 flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-400" />
                  {module.duration}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/95 group-hover:text-blue-200 transition-colors">
                {module.title}
              </h4>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h5 className="text-xs sm:text-sm font-semibold tracking-wider text-white/50 uppercase mb-5 flex items-center gap-2">
                <BookOpen size={16} className="text-purple-400/80" />
                Key Topics
              </h5>
              <ul className="space-y-3.5">
                {module.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/[0.02] rounded-2xl p-5 sm:p-6 border border-white/[0.04]">
              <h5 className="text-xs sm:text-sm font-semibold tracking-wider text-white/50 uppercase mb-5 flex items-center gap-2">
                <Video size={16} className="text-blue-400/80" />
                Class Breakdown
              </h5>
              <ul className="space-y-4">
                {module.classes.map((cls, i) => {
                  const [clsName, ...descParts] = cls.split(": ");
                  const desc = descParts.join(": ");
                  return (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 text-sm md:text-base"
                    >
                      <span className="font-semibold text-blue-300/90 whitespace-nowrap bg-blue-500/10 px-2 py-0.5 rounded text-xs md:text-sm self-start">
                        {clsName}
                      </span>
                      <span className="text-gray-300 leading-relaxed">
                        {desc || clsName}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
