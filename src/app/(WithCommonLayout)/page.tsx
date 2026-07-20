import HeroSection from '@/components/module/home/HeroSection';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { generateMetadata } from '@/lib/generateMetadata';
import EnrollmentFixed from '@/components/module/home/EnrollmentFixed';
import { EnrollmentSection } from '@/components/module/home/EnrollmentSection';
import WhyThisCourse from '@/components/module/home/WhyThisCourse';
import ProfessionalEnglish from '@/components/module/home/ProfessionalEnglish';
import WhyUs from '@/components/module/home/WhyUs';

export const metadata = generateMetadata({
  title: 'Professional English Course | ESUN POINT',
  description:
    'Improve your spoken English and professional communication skills with ESUN POINT. Learn from expert mentors and build confidence for interviews, meetings, and real-life conversations.',
  keywords: [
    'spoken english course in bangladesh',
    'professional english course',
    'english for interview',
    'english communication skills',
    'online spoken english course',
    'business english course',
    'english speaking practice',
    'english course for beginners',
    'career english training',
    'esun point',
    'esun point english course',
  ],
  slug: '',
});

export default function page() {
  return (
    <div>
      <BreadcrumbJsonLd />
      <HeroSection />
      <WhyThisCourse />
      <ProfessionalEnglish />
      {/* <EnglishSkills /> */}
      <WhyUs />
      <EnrollmentSection />
      {/* <Feedback /> */}
      <EnrollmentFixed />
    </div>
  );
}
