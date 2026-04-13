// CourseJsonLd.tsx — Server Component
// Outputs JSON-LD structured data for the "English for Professional Communication" course.
// This enables Google to display rich results (e.g., course cards in search).

import Script from 'next/script';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function CourseJsonLd() {
    const courseSchema = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'English for Professional Communication',
        description:
            'A comprehensive spoken English and professional communication course for career-ready learners in Bangladesh. Master workplace English, interviews, and presentations with expert mentorship and live interactive classes.',
        url: `${BASE_URL}/courses`,
        provider: {
            '@type': 'Organization',
            name: 'ESUN POINT',
            sameAs: BASE_URL,
        },
        educationalLevel: 'Beginner to Intermediate',
        inLanguage: 'en',
        teaches: [
            'Spoken English',
            'Professional Communication',
            'Business English',
            'Interview Skills',
            'Presentation Skills',
        ],
        courseMode: 'online',
        availableLanguage: {
            '@type': 'Language',
            name: 'Bengali',
        },
        offers: {
            '@type': 'Offer',
            category: 'Paid',
            priceCurrency: 'BDT',
            availability: 'https://schema.org/InStock',
            url: `${BASE_URL}/checkout`,
        },
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            instructor: {
                '@type': 'Person',
                name: 'Puspita Singha',
                jobTitle: 'Lead Instructor, English For Professional Communication',
            },
        },
    };

    return (
        <Script
            id="course-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            strategy="afterInteractive"
        />
    );
}
