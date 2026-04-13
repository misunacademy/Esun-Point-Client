// Route-level layout for /payment — noindex to prevent indexing of payment confirmation page.
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Payment | ESUN POINT',
    description: 'ESUN POINT payment processing page.',
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
