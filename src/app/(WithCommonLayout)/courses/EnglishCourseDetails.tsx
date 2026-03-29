import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import CourseCurriculum from "@/components/module/course/english/CourseCurriculum";
import CourseWorkflow from "@/components/module/course/english/CourseWorkflow";
import InstructorSection from "@/components/module/course/english/InstructorSection";
import FaqSection from "@/components/module/course/english/FaqSection";
import BannerSection from "@/components/module/course/english/BannerSection";




// ─── Component ───────────────────────────────────────────────────────────────

export default function EnglishCourseDetails() {



  return (
    <div>
      <BreadcrumbJsonLd />

      {/* ── Banner ── */}
      <BannerSection />

      {/* ── Instructor ── */}
      <InstructorSection />
      {/* ── Course Workflow ── */}
      <CourseWorkflow />

      {/* ── Curriculum ── */}
      <CourseCurriculum />


      {/* ── FAQ ── */}
      <FaqSection />

    </div>
  );
}