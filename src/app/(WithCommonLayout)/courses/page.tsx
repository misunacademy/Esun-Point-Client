import { generateMetadata } from '@/lib/generateMetadata';
import EnglishCourseDetails from './EnglishCourseDetails';

export const metadata = generateMetadata({
  title: 'Courses | ESUN POINT',
  description:
    'Explore all courses from ESUN POINT. Learn spoken English and practical communication skills with structured guidance and real-world practice.',
  keywords: [
    'Spoken English Course',
    'Professional Communication',
    'ESUN POINT',
    'Online Course',
    'English Learning',
    'Bangladesh',
  ],
  slug: 'courses',
});

export default function CoursesPage() {
  return <EnglishCourseDetails />;
}
