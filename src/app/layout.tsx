import Script from 'next/script';
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from '@/providers/Providers';
import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bangla',
  display: 'swap',
  preload: false,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ESUN POINT — Professional English Communication Course',
    template: '%s | ESUN POINT',
  },
  description:
    'ESUN POINT is an online learning platform focused on spoken English and professional communication skills to help learners grow confidently in career and daily life.',
  keywords: [
    'spoken english course bangladesh',
    'professional english communication',
    'esun point',
    'online english course',
    'english for career',
  ],
  authors: [{ name: 'MISUN Academy', url: BASE_URL }],
  creator: 'MISUN Academy',
  publisher: 'MISUN Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ESUN POINT',
    title: 'ESUN POINT — Professional English Communication Course',
    description:
      'Master spoken English and professional communication with ESUN POINT. Expert mentorship, live classes, and lifetime access.',
    images: [
      {
        url: `${BASE_URL}/preview/default-og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ESUN POINT — Professional English Communication Course',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESUN POINT — Professional English Communication Course',
    description:
      'Master spoken English and professional communication with ESUN POINT.',
    images: [`${BASE_URL}/preview/default-og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  return (
    <html lang="en" className={hindSiliguri.variable}>
      <head>
        {/* Meta Pixel */}
        {pixelId && (
          <>
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
            >
              {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {/* Load GA script only if GA_ID is available */}

        {/* Organization + WebSite JSON-LD Structured Data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'MISUN Academy',
                alternateName: 'ESUN POINT',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.misun-academy.com',
                logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.misun-academy.com'}/preview/default-og-image.png`,
                description:
                  'ESUN POINT is an online learning platform offering professional English communication courses in Bangladesh.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '85, Sultan Ahmed Road, Moulavipara, Ward No. 27',
                  addressLocality: 'Khulna',
                  addressCountry: 'BD',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+88-01778371211',
                  contactType: 'customer service',
                  email: 'misunacademybd@gmail.com',
                  areaServed: 'BD',
                  availableLanguage: ['Bengali', 'English'],
                },
                sameAs: [
                  'https://www.facebook.com/esunpoint',
                  'https://www.youtube.com/@EsunPoint',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'ESUN POINT',
                url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.misun-academy.com',
                description:
                  'Professional English communication courses by MISUN Academy.',
                publisher: {
                  '@type': 'Organization',
                  name: 'MISUN Academy',
                },
              },
            ]),
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className=''>
        <Providers>
          {/* Initialize GA tracking only if GA_ID is available */}
          {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

          {/* Vercel Analytics (optional) */}
          <Analytics />

          {children}
        </Providers>
      </body>
    </html>
  );
}
