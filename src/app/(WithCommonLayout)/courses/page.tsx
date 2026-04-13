import { generateMetadata } from '@/lib/generateMetadata';
import EnglishCourseDetails from './EnglishCourseDetails';
import CourseJsonLd from '@/components/seo/CourseJsonLd';

export const metadata = generateMetadata({
  title: 'English for Professional Communication Course | ESUN POINT',
  description:
    'Explore the ESUN POINT Professional English Communication course. Learn spoken English, business communication, interview skills, and more with expert mentorship and live interactive classes.',
  keywords: [
    'Spoken English Course',
    'Professional Communication',
    'ESUN POINT',
    'Online Course',
    'English Learning',
    'Bangladesh',
    'Business English',
    'Interview Skills',
  ],
  slug: 'courses',
});

export default function CoursesPage() {
  return (
    <>
      <CourseJsonLd />
      <EnglishCourseDetails />
    </>
  );
}
