'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/metaPixel';

/**
 * SPA page views for the Meta Pixel. The first PageView is fired by
 * `initPixel()` after consent; this component only covers later client-side
 * route changes, so the landing page is never counted twice.
 */
export default function MetaPixelPageViewTracker() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  return null;
}
