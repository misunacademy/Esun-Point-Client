// Route-level layout for /checkout — exports noindex metadata so search engines
// do not index the protected enrollment page. The 'use client' page itself cannot
// export metadata, so this layout handles it for the entire route segment.
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

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
