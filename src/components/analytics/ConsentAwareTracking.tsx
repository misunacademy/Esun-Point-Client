'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useSyncExternalStore } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { hasGrantedConsent, subscribeToConsent } from '@/lib/consent';
import { initPixel } from '@/lib/metaPixel';

/**
 * Consent-gated marketing scripts. Meta Pixel + GA render and initialize
 * only after an explicit opt-in; declining (or never choosing) leaves them
 * completely unloaded. Vercel Analytics (cookieless) stays unconditional.
 */
export default function ConsentAwareTracking({
  pixelId,
  gaId,
}: {
  pixelId?: string;
  gaId?: string;
}) {
  const granted = useSyncExternalStore(
    subscribeToConsent,
    () => hasGrantedConsent(),
    () => false
  );

  useEffect(() => {
    if (granted && pixelId) initPixel(pixelId);
  }, [granted, pixelId]);

  if (!granted) return null;

  return (
    <>
      {pixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
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
      )}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
