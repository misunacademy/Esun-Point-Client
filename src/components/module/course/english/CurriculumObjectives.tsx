"use client";

import { motion } from "framer-motion";
import { Zap, Check } from "lucide-react";
import { objectives } from "@/constants/courseCurriculum";

export function CurriculumObjectives() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
            <Zap size={20} />
          </span>
          Course Objectives
        </h3>
        <p className="text-white/60 mt-3 text-sm max-w-xl">
          After completing this course, learners will be able to achieve the following key communications goals:
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {objectives.map((obj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0a1122] to-surface-deep border border-white/5 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300"
          >
            <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all text-blue-400">
              <Check size={14} strokeWidth={2.5} />
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
              {obj}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

