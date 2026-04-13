// Route-level layout for /feedback — exports metadata since the page itself is 'use client'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Student Feedback | ESUN POINT',
    description:
        'Read real success stories and feedback from ESUN POINT students. See how our professional English communication course has helped hundreds of learners build confidence and advance their careers.',
    keywords: [
        'esun point student feedback',
        'misun academy reviews',
        'english course student testimonials',
        'spoken english course review bangladesh',
        'online english course testimonials',
    ],
    openGraph: {
        title: 'Student Feedback | ESUN POINT',
        description:
            'Real success stories from ESUN POINT students who transformed their English communication skills.',
        url: 'https://www.esun.misun-academy.com/feedback',
        siteName: 'ESUN POINT',
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.esun.misun-academy.com/feedback',
    },
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
