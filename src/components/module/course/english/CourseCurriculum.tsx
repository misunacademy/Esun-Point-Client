"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const objectives = [
  "Communicate confidently in the professional and academic sector.",
  "Write clear and professional messages, emails, and short reports.",
  "Speak fluently in meetings, presentations, and discussions.",
  "Use correct grammar structures needed for everyday communication.",
  "Avoid common mistakes in speaking and writing."
];

const modules = [
  {
    id: "Module 1",
    title: "Foundations of Professional English",
    duration: "Weeks 1–2",
    topics: [
      "Sentence structure (S + V + O)",
      "Basic tenses (Present, Past, Future)",
      "Common grammar mistakes",
      "Basic punctuation",
      "Speaking practice: Self-introduction, describing routine"
    ],
    classes: [
      "Class 1: Self-introduction, simple present tense, speaking practice",
      "Class 2: Simple past & future, punctuation, writing short sentences"
    ]
  },
  {
    id: "Module 2",
    title: "Grammar for Professional Communication",
    duration: "Weeks 3–4",
    topics: [
      "Modal verbs (can, could, should, would)",
      "Polite requests and offers",
      "Prepositions for time, place, and work context",
      "Avoiding common mistakes"
    ],
    classes: [
      "Class 3: Modal verbs, polite requests, speaking practice",
      "Class 4: Prepositions, common mistakes, writing practice"
    ]
  },
  {
    id: "Module 3",
    title: "Professional Vocabulary & Expressions",
    duration: "Week 5",
    topics: [
      "Workplace and academic vocabulary",
      "Collocations used in professional English",
      "Polite expressions and tone",
      "Speaking practice: Talking about work/projects",
      "Writing practice: Short professional messages"
    ],
    classes: [
      "Class 5: Vocabulary and polite expressions, speaking exercises",
      "Class 6: Collocations, writing emails/messages"
    ]
  },
  {
    id: "Module 4",
    title: "Professional Writing Skills",
    duration: "Weeks 6–7",
    topics: [
      "Writing professional emails",
      "Requesting and clarifying information",
      "Giving updates and explanations",
      "Handling complaints or revisions",
      "Writing short reports or summaries"
    ],
    classes: [
      "Class 7: Email writing, requesting information",
      "Class 8: Replying to messages, follow-ups",
      "Class 9: Writing updates, explanations, short reports",
      "Class 10: Asking for clarification, handling complaints"
    ]
  },
  {
    id: "Module 5",
    title: "Speaking for Workplace Communication",
    duration: "Week 8",
    topics: [
      "Asking and answering questions in meetings",
      "Expressing opinions politely",
      "Giving instructions and explanations",
      "Handling disagreements professionally"
    ],
    classes: [
      "Class 11: Speaking clearly, asking & answering questions",
      "Class 12: Expressing opinions, giving instructions"
    ]
  },
  {
    id: "Module 6",
    title: "Presentation & Public Speaking",
    duration: "Week 9",
    topics: [
      "Structuring a presentation",
      "Introducing topics & yourself",
      "Using transition phrases",
      "Handling audience questions",
      "Speaking with confidence and clarity"
    ],
    classes: [
      "Class 13: Presentation structure, short topic presentation",
      "Class 14: Transitions, handling questions, peer feedback"
    ]
  },
  {
    id: "Module 7",
    title: "Advanced Professional Communication",
    duration: "Week 10",
    topics: [
      "Workplace conversations & etiquette",
      "Professional tone in writing & speaking",
      "Polite refusals and negotiation",
      "Handling clients, supervisors, or teachers",
      "Final speaking & writing assessment"
    ],
    classes: [
      "Class 15: Writing & speaking for professional scenarios",
      "Class 16: Role-plays: negotiation, complaints, emails",
      "Class 17: Real-life conversation simulations",
      "Class 18: Final assessment: messages & speaking",
      "Class 19: Feedback, corrections, tips for independent practice",
      "Class 20: Wrap-up, certificate preparation"
    ]
  }
];

const CourseCurriculum = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Adjust the end percent to stop at the last module correctly
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  // Glow effect mapping size based on scroll position (optional)
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section className="relative bg-[#060a12] overflow-hidden py-24 font-bangla">
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white/70 bg-clip-text text-transparent">
            English for Professional Communication
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 mt-2">
            <div className="flex items-center gap-2 bg-[#0a1122] px-5 py-2.5 rounded-xl border border-white/5 shadow-inner">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-sm sm:text-base">Course Duration: 3 months</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a1122] px-5 py-2.5 rounded-xl border border-white/5 shadow-inner">
              <svg
                className="w-5 h-5 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="font-medium text-sm sm:text-base">Class Duration: 1-1.5 hours</span>
            </div>
          </div>
        </motion.div>

        {/* Objectives Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Course Objectives
            </h3>
            <p className="text-white/50 mt-3 text-sm max-w-xl">
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#0a1122] to-[#060a12] border border-white/5 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white/75 text-sm md:text-base leading-relaxed group-hover:text-white/95 transition-colors">
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modules/Curriculum Section */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-3">Curriculum Overview</h3>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              A comprehensive step-by-step learning path designed to build your professional communication skills.
            </p>
          </motion.div>

          <div ref={timelineRef} className="space-y-8 relative max-w-5xl mx-auto pb-[100px]">
            {/* Vertical timeline line connecting modules */}
            <div className="absolute left-[27px] md:left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent hidden sm:block overflow-hidden" />

            {/* Animated Rocket on Timeline */}
             <motion.div
               style={{ 
                 top: rocketY,
                 marginTop: "24px" // Starts exactly where the top-6 is for the vertical line
               }}
               className="absolute z-20 hidden sm:flex left-[15px] md:left-[27px] w-6 h-6 items-center justify-center pointer-events-none"
             >
                {/* Glow behind the rocket */}
                <motion.div 
                  style={{ opacity: glowOpacity }}
                  className="absolute w-14 h-14 bg-gradient-to-b from-blue-500/40 to-purple-500/40 blur-xl rounded-full"
                />
                
                {/* Rocket Icon Container */}
                {/* <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#0a1122] to-[#060a12] rounded-full border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.6)]"> */}
                  <span className="text-4xl transform rotate-[135deg] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    🚀
                  </span>
                  
                  {/* Rocket Trail particle */}
                  {/* <div className="absolute top-[80%] w-2 h-10 bg-gradient-to-b from-orange-400 via-blue-500 to-transparent blur-[2px] rounded-full origin-top -z-10" /> */}
                {/* </div> */}
             </motion.div>

            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-20 flex-col items-center pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#060a12] border-2 border-blue-500/30 flex items-center justify-center z-10 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <span className="text-blue-400 font-bold text-sm tracking-tighter">
                      M{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-grow rounded-3xl bg-gradient-to-br from-[#0a1122]/80 to-[#060a12] border border-white/[0.08] hover:border-blue-500/30 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Module Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 rounded-lg border border-blue-500/20">
                            {module.id}
                          </span>
                          <span className="text-sm font-medium text-white/50 flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {module.duration}
                          </span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-white/95 group-hover:text-blue-200 transition-colors">
                          {module.title}
                        </h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Topics */}
                      <div>
                        <h5 className="text-sm font-semibold tracking-wider text-white/40 uppercase mb-5 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-purple-400/80"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
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

                      {/* Classes */}
                      <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.04]">
                        <h5 className="text-sm font-semibold tracking-wider text-white/40 uppercase mb-5 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-400/80"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
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
                                <span className="font-semibold text-blue-300/90 whitespace-nowrap bg-blue-500/10 px-2 py-0.5 rounded text-xs md:text-sm">
                                  {clsName}
                                </span>
                                <span className="text-gray-400 leading-relaxed">
                                  {desc}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
