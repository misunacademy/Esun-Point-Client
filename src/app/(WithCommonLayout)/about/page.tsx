import { generateMetadata } from '@/lib/generateMetadata';
import { TeamSection } from './TeamSection';
import { StorySection } from './StorySection';
import { MissionSection } from './MissionSection';
import { CtaSection } from './CtaSection';

export const metadata = generateMetadata({
  title: 'About Us',
  description:
    'Learn about ESUN POINT and the MISUN Academy team. Our mission is to provide professional English communication training that builds confident, career-ready learners in Bangladesh and beyond.',
  keywords: [
    'about esun point', 'misun academy team', 'english course instructor',
    'khulna english academy', 'online english education bangladesh',
    'puspita singha instructor', 'mithun sarkar misun',
  ],
  slug: 'about',
});

const AboutUs = () => (
  <div className="min-h-screen bg-surface overflow-hidden">
    <h1 className="sr-only">About ESUN POINT and the MISUN Academy team</h1>
    <TeamSection />
    <StorySection />
    <MissionSection />
    <CtaSection />
  </div>
);

export default AboutUs;
