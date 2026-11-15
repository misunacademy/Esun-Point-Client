'use client';

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
      aria-label="Tracking consent"
      className="fixed inset-x-0 bottom-0 z-[var(--z-toast)] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div
        ref={cardRef}
        className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-primary/20 bg-surface/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center"
      >
        <p className="flex-1 text-xs leading-relaxed text-white/75">
          We use cookies and pixels (Meta, Google Analytics) to measure traffic and improve courses.
          Accept for analytics, or decline to browse with strictly-necessary cookies only.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-xl border border-white/25 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/[0.08]"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-xl bg-primary-strong px-4 py-2 text-xs font-bold text-white hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
