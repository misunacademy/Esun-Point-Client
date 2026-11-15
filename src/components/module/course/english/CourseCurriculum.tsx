"use client";

import { motion } from "framer-motion";
import { Clock, Video, Download } from "lucide-react";
import { modules } from "@/constants/courseCurriculum";
import { DotGrid, SectionBorder } from "@/components/shared/Decorative";
import { CurriculumObjectives } from "./CurriculumObjectives";
import { CurriculumModuleCard } from "./CurriculumModuleCard";
import { Button } from "@/components/ui/button";

export default function CourseCurriculum() {
  return (
    <section className="relative bg-surface-deep overflow-hidden py-20 md:py-24">
      <DotGrid />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <SectionBorder />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-400">
              Course Details
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white/70 bg-clip-text text-transparent">
            English for Professional Communication
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 mt-2">
            <div className="flex items-center gap-2 bg-[#0a1122] px-5 py-2.5 rounded-xl border border-white/5 shadow-inner">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-sm sm:text-base">Course Duration: 3 months</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a1122] px-5 py-2.5 rounded-xl border border-white/5 shadow-inner">
              <Video className="w-5 h-5 text-purple-400" />
              <span className="font-medium text-sm sm:text-base">Class Duration: 1-1.5 hours</span>
            </div>
          </div>
          <Button asChild variant="creative" className="w-auto mt-8">
            <a href="/outline/English_for_Professional_Communication_Course_Outline.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Course Outline
            </a>
          </Button>
        </motion.div>

        <CurriculumObjectives />

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Curriculum Overview</h3>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              A comprehensive step-by-step learning path designed to build your professional communication skills.
            </p>
          </motion.div>

          <div className="space-y-8 relative max-w-5xl mx-auto pb-16">
            {modules.map((module, idx) => (
              <CurriculumModuleCard
                key={module.id}
                module={module}
                index={idx}
                isLast={idx === modules.length - 1}
                isFirst={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
