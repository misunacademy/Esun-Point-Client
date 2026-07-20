import { generateMetadata } from '@/lib/generateMetadata';
import { HeroSection } from './HeroSection';
import { TeamSection } from './TeamSection';
import { StorySection } from './StorySection';
import { MissionSection } from './MissionSection';
import { CtaSection } from './CtaSection';

export const metadata = generateMetadata({
  title: 'About Us | ESUN POINT',
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
  <div className="min-h-screen bg-[#060a0f] font-bangla overflow-hidden">
    <HeroSection />
    <TeamSection />
    <StorySection />
    <MissionSection />
    <CtaSection />
  </div>
);

export default AboutUs;
