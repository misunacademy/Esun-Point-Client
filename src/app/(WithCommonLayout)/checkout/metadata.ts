// Metadata for checkout page — must be in a separate file because the page itself is 'use client'
// Next.js App Router picks this up via re-export in a Server Component wrapper.
// This file is imported by a server-side route.tsx if we need to add it later.
// For now, add noindex directly via the layout or via a route segment config.

// ⚠️  Because checkout/page.tsx uses 'use client', metadata cannot be exported
// from it directly. The standard pattern is to create a layout.tsx at the
// route level that exports metadata, which takes effect for that segment.
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enroll Now | ESUN POINT',
    description: 'Complete your enrollment in the ESUN POINT Professional English Communication course.',
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};
