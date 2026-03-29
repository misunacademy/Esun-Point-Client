"use client"
import { Assignment, Scic, SearchOnline, Session, SupportSession, SubmitAssignment, WeekCourse, Duration } from "@/assets/icons";
import Container from "@/components/ui/container";
import Clock from "@/assets/icons/Clock";
import Link from "next/link";
import WorkflowCard from "./WorkFlowCard";


// ─── English course workflow steps ───────────────────────────────────────────
const englishWorkflowSteps = [
  {
    title: "1:1 Mentorship Session",
    description: "An experienced English trainer will identify your weak areas and guide you personally.",
    icon: <Clock />,
    glowColor: "hsl(217 91% 60%)",
    accentColor: "hsl(217 91% 60%)",
  },
  {
    title: "Live Support 3 Times Daily",
    description: "Opportunity to ask questions in direct live support every morning, afternoon, and night.",
    icon: <Scic />,
    glowColor: "hsl(192 91% 44%)",
    accentColor: "hsl(192 91% 44%)",
  },
  {
    title: "24/7 WhatsApp Private Group Support",
    description: "Get quick help regarding English from the WhatsApp group at any time.",
    icon: <SearchOnline />,
    glowColor: "hsl(263 70% 65%)",
    accentColor: "hsl(263 70% 65%)",
  },
  {
    title: "1:1 Speaking Feedback Session",
    description: "Personal review and improvement advice on your pronunciation and speaking style.",
    icon: <Session />,
    glowColor: "hsl(24 95% 53%)",
    accentColor: "hsl(24 95% 53%)",
  },
  {
    title: "Direct Preparation for Job Interviews",
    description: "Guarantee to become job-ready through mock interviews and real-life practice.",
    icon: <SupportSession />,
    glowColor: "hsl(350 89% 60%)",
    accentColor: "hsl(350 89% 60%)",
  },
  {
    title: "100% Success Guarantee for 3 Months",
    description: "Assurance to speak English with confidence if you participate regularly.",
    icon: <SubmitAssignment />,
    glowColor: "hsl(48 96% 47%)",
    accentColor: "hsl(48 96% 47%)",
  },
  {
    title: "Roleplay & Group Discussion Practice",
    description: "Interactive roleplay sessions to gain speaking skills for real-life situations.",
    icon: <WeekCourse />,
    glowColor: "hsl(217 91% 60%)",
    accentColor: "hsl(217 91% 60%)",
  },
  {
    title: "Digital Certificate on Completion",
    description: "A certificate from MISUN Academy that can be added to your LinkedIn and CV.",
    icon: <Duration />,
    glowColor: "hsl(173 80% 40%)",
    accentColor: "hsl(173 80% 40%)",
  },
];

const CourseWorkflow = () => {
  return (<section className="relative bg-[#060a12] overflow-hidden">
    {/* Dot-grid texture */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle, hsl(217 91% 60%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    {/* Ambient glows */}
    <div className="absolute -top-20 right-1/4 w-96 h-96 bg-blue-500/7 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    {/* Edge separators */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

    <Container className="relative z-10 pb-20 pt-16 max-w-7xl mx-auto">
      <div className="p-4">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/90">Course Workflow</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-[150%] bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
            How The Course Is {" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_16px_hsl(217_91%_60%/0.4)]">Conducted</span>
          </h2>

          <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
            Not just memorizing grammar — in this course, you&apos;ll learn to speak English with confidence through real-life conversations, mentorship, and live practice.
          </p>

          {/* Enroll CTA */}
          <div className="mt-8 mb-10">
            <Link href="/checkout?course=english-for-professional-communication">
              <div className="inline-block relative p-[1.5px] rounded-xl overflow-hidden">
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
                <button className="relative bg-gradient-to-r from-blue-800 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-400 hover:to-blue-700 transition-all duration-300 text-white font-semibold text-base px-10 py-3 rounded-xl shadow-[0_0_20px_hsl(217_91%_60%/0.35)] cursor-pointer">
                  Enroll Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-500/40" />
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-500/40" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {englishWorkflowSteps.map((step, index) => (
          <WorkflowCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            glowColor={step.glowColor}
            accentColor={step.accentColor}
          />
        ))}
      </div>
    </Container>
  </section>)
}
export default CourseWorkflow;