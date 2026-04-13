import type { Metadata } from 'next';

interface GenerateMetadataParams {
    title: string;
    description: string;
    keywords?: string[];
    slug?: string; // e.g., 'courses'
    image?: string; // fallback to default
    noIndex?: boolean; // prevent indexing for private pages
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const DEFAULT_IMAGE = 'default-og-image.png';
const SITE_NAME = 'ESUN POINT';

export const generateMetadata = ({
    title,
    description,
    keywords = [],
    slug = '',
    image = DEFAULT_IMAGE,
    noIndex = false,
}: GenerateMetadataParams): Metadata => {
    const normalizedSlug = slug ? `/${slug.replace(/^\/+/, '')}` : '';
    const normalizedImage = image.replace(/^\/+/, '');
    const url = `${BASE_URL}${normalizedSlug}`;
    const finalImage = `${BASE_URL}/preview/${normalizedImage}`;

    return {
        title,
        description,
        keywords,
        metadataBase: new URL(BASE_URL),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
                googleBot: { index: false, follow: false },
            },
        }),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: finalImage,
                    width: 1200,
                    height: 630,
                    alt: `${title} | ${SITE_NAME}`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [finalImage],
            site: '@EsunPoint',
        },
    };
};
