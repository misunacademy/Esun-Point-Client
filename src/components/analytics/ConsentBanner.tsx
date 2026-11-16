'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { getConsent, setConsent, subscribeToConsent, type ConsentChoice } from '@/lib/consent';

export default function ConsentBanner() {
  // Hidden on the server and until a choice is absent client-side.
  const visible = useSyncExternalStore(
    subscribeToConsent,
    () => getConsent() === null,
    () => false
  );

  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!visible) return;

    const card = cardRef.current;
    if (!card) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        '--consent-banner-h',
        `${card.getBoundingClientRect().height}px`
      );
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(card);

    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty('--consent-banner-h', '0px');
    };
  }, [visible]);

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-banner-title"
      className="fixed inset-x-0 bottom-0 z-[var(--z-toast)] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div
        ref={cardRef}
        className="mx-auto flex max-h-[75vh] max-w-3xl flex-col gap-4 overflow-y-auto rounded-2xl border border-primary/20 bg-surface/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:gap-6"
      >
        <div className="flex-1 space-y-1.5">
          <p id="consent-banner-title" className="text-sm font-semibold text-white">
            Your privacy
          </p>
          <p className="text-xs leading-relaxed text-white/75">
            We keep a few small cookies in your browser to run this site. If you allow it, we use
            Google and Facebook tools to see how people use the site and improve our courses and
            ads. If you don&apos;t, the site works the same — and you can change this any time in
            Cookie settings.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-block text-xs font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
          >
            Privacy policy
          </Link>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="flex-1 rounded-xl border border-white/25 px-4 py-2 text-xs font-semibold text-white/85 transition-colors hover:border-white/40 hover:bg-white/[0.08] hover:text-white sm:flex-none"
          >
            No, thanks
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="flex-1 rounded-xl bg-primary-strong px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:flex-none"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
