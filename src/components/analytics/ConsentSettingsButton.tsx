'use client';

import { resetConsent } from '@/lib/consent';

export default function ConsentSettingsButton() {
  return (
    <button
      type="button"
      onClick={resetConsent}
      className="text-sm leading-relaxed text-white/40 underline decoration-white/20 underline-offset-4 transition-colors hover:text-blue-400 hover:decoration-blue-400/50"
    >
      Cookie settings
    </button>
  );
}
