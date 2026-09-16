import {
  Headphones,
  Video,
  Target,
  BookOpen,
  Star,
  Clock,
  Laptop,
  Search,
  UserCircle,
  Zap,
  PencilRuler,
  Gift,
  FileBadge,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

export const features: Feature[] = [
  {
    icon: Headphones,
    title: 'Regular Mentorship & Support Sessions',
    description:
      'Get continuous guidance from experienced mentors who help you improve your speaking confidence, communication skills, and learning progress.',
    highlight: 'Support',
  },
  {
    icon: Video,
    title: 'Live Interactive Classes',
    description:
      'Participate in live classes where you practice English through discussions, activities, and real-life communication scenarios.',
    highlight: 'Interactive Learning',
  },
  {
    icon: Target,
    title: 'Real Conversation Practice',
    description:
      'Improve your fluency through practical speaking exercises, role plays, and everyday conversation practice.',
    highlight: 'Real Practice',
  },
  {
    icon: BookOpen,
    title: 'Personalized Learning Guidance',
    description:
      'Receive individual feedback to improve pronunciation, sentence structure, and professional communication skills.',
    highlight: 'Expert Guidance',
  },
  {
    icon: Laptop,
    title: '100+ Practice Activities',
    description:
      'Strengthen your English skills through a variety of speaking, listening, and communication practice activities.',
    highlight: 'Hands-On Practice',
  },
  {
    icon: Search,
    title: 'Interview & Workplace Communication Training',
    description:
      'Learn how to communicate confidently in interviews, meetings, presentations, and professional environments.',
    highlight: 'Career Ready',
  },
  {
    icon: UserCircle,
    title: 'Professional Communication Practice',
    description:
      'Practice real workplace communication including meetings, presentations, and group discussions.',
    highlight: 'Professional Skills',
  },
  {
    icon: Zap,
    title: 'AI-Powered Learning Support',
    description:
      'Use modern AI tools and guided exercises to improve pronunciation, vocabulary, and sentence structure.',
    highlight: 'AI Powered',
  },
  {
    icon: PencilRuler,
    title: 'Advanced Speaking Techniques',
    description:
      'Learn advanced speaking methods that help you communicate clearly and confidently.',
    highlight: 'Top-Level Skills',
  },
  {
    icon: Gift,
    title: 'Exclusive Student Community',
    description:
      'Join a supportive learning community where students practice English together and grow their communication skills.',
    highlight: 'Community',
  },
  {
    icon: FileBadge,
    title: 'Certificate of Completion',
    description: 'Receive a professional certificate after successfully completing the course.',
    highlight: 'Official Recognition',
  },
  {
    icon: Rocket,
    title: 'Mock Interview Practice',
    description: 'Prepare for job interviews with mock interview sessions and real communication practice.',
    highlight: 'Interview Ready',
  },
  {
    icon: Star,
    title: '200+ Learning Resources',
    description: 'Get access to premium resources including worksheets, conversation guides, and practice materials.',
    highlight: 'Resource Boost',
  },
];

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: Clock, value: '3 Months', label: 'Duration' },
];
