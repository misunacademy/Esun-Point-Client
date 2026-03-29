import { generateMetadata } from '@/lib/generateMetadata';
import EnglishCourseDetails from './EnglishCourseDetails';

export const metadata = generateMetadata({
  title: 'Courses | MISUN Academy',
  description:
    'Explore all courses from MISUN Academy. From Graphics Design to English Learning — enroll in your favorite course and build your career.',
  keywords: [
    'Spoken English Course',
    'Freelancing',
    'MISUN Academy',
    'Online Course',
    'English Learning',
    'Bangladesh',
  ],
  slug: 'courses',
});

export default function CoursesPage() {
  return <EnglishCourseDetails />;
}
