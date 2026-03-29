import dynamic from 'next/dynamic';
import HeroSection from '@/components/module/home/HeroSection';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { generateMetadata } from '@/lib/generateMetadata';
import EnrollmentFixed from '@/components/module/home/EnrollmentFixed';

const WhyThisCourse = dynamic(() => import('@/components/module/home/WhyThisCourse'));
const ProfessionalEnglish = dynamic(() => import('@/components/module/home/ProfessionalEnglish'));
const WhyUs = dynamic(() => import('@/components/module/home/WhyUs'));
const EnrollmentSection = dynamic(
  () => import('@/components/module/home/EnrollmentSection').then((mod) => mod.EnrollmentSection)
);

export const metadata = generateMetadata({
  title: 'Complete Graphic Design Course | MISUN Academy',
  description:
    'The best graphic design course for a successful career in the digital age. Learn design from home and build a career in freelancing with MISUN Academy.',
  keywords: [
    'Graphic Design Course in Bangladesh',
    'Freelancing Graphic Course',
    'Graphic Design Online Course BD',
    'best graphic design course Bangladesh',
    'Complete Graphic Design Course',
    'Freelancing Learning Course',
    'misun academy graphic design',
    'graphic design course misun academy',
    'graphic design bangla course',
    'graphic design freelancing',
    'Adobe Photoshop course BD',
    'Illustrator course Bangladesh',
    'online graphic course',
    'freelancing skill development',
    'career in design Bangladesh',
    'design course for beginners',
    'graphic design for freelancing',
    'freelancing bd',
    'freelancing graphic',
    'misun academy',
    'misun graphic course',
    'graphic portfolio course',
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
