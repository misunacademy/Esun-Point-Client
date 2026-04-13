'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const BreadcrumbJsonLd = () => {
    const pathname = usePathname();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

    // Map routes to breadcrumb names and URLs
    const breadcrumbMap: { [key: string]: { name: string; item: string } } = {
        '/': {
            name: 'Home',
            item: `${baseUrl}/`
        },
        '/about': {
            name: 'About Us',
            item: `${baseUrl}/about`
        },
        '/courses': {
            name: 'Courses',
            item: `${baseUrl}/courses`,
        },
        '/checkout': {
            name: 'Enroll',
            item: `${baseUrl}/checkout`,
        },
        '/feedback': {
            name: 'Student Feedback',
            item: `${baseUrl}/feedback`,
        },
        '/privacy-policy': {
            name: 'Privacy Policy',
            item: `${baseUrl}/privacy-policy`,
        },
        '/refund-policy': {
            name: 'Refund Policy',
            item: `${baseUrl}/refund-policy`,
        },
        '/terms-and-conditions': {
            name: 'Terms & Conditions',
            item: `${baseUrl}/terms-and-conditions`,
        },
    };

    // Generate breadcrumb trail
    const breadcrumbs = Object.entries(breadcrumbMap)
        .filter(([route]) => pathname === route || (route !== '/' && pathname.startsWith(route)))
        .map(([, value], index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: value.name,
            item: value.item,
        }));

    if (!breadcrumbs.length) return null;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs,
    };

    return (
        <Script
            id="breadcrumb-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="afterInteractive"
        />
    );
};

export default BreadcrumbJsonLd;

