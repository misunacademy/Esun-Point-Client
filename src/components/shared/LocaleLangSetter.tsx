'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LocaleLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const bnRegex = /[\u0980-\u09FF]/;
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (const s of Array.from(scripts)) {
      const text = s.textContent || '';
      if (bnRegex.test(text)) {
        html.lang = 'bn';
        return;
      }
    }
    const bodyText = document.body?.textContent || '';
    if (bnRegex.test(bodyText)) {
      html.lang = 'bn';
      return;
    }
    const browserLang = navigator.language?.toLowerCase() || 'en';
    html.lang = browserLang.startsWith('bn') ? 'bn' : 'en';
  }, [pathname]);

  return null;
}
