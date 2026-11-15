"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useGetSettingsQuery } from "@/redux/api/settingsApi";

export default function PopupBannerModal() {
  const { data, isSuccess } = useGetSettingsQuery();
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("misunPopupDismissed") === "1";
  });

  const popupEnabled = data?.data?.popupEnabled;
  const popupImageUrl = data?.data?.popupImageUrl?.trim() || "";
  const popupLink = data?.data?.popupLink?.trim() || "";
  const showPopup = !isDismissed && isSuccess && popupEnabled && !!popupImageUrl;

  if (!showPopup) {
    return null;
  }

  const close = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem("misunPopupDismissed", "1");
    } catch {
      // no fallback
    }
  };

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-w-5xl w-full bg-surface-deep rounded-xl shadow-xl overflow-hidden">
        <button
          className="absolute top-3 right-3 z-20 rounded-full bg-white/10 p-1 text-white shadow hover:bg-white/20"
          aria-label="Close popup"
          onClick={close}
        >
          <X className="h-5 w-5" />
        </button>

        {popupLink ? (
          <a href={popupLink} target="_blank" rel="noreferrer" onClick={close}>
            <div className="relative h-[80vh] w-full">
              <Image src={popupImageUrl} alt="Popup banner" fill sizes="100vw" className="object-cover" unoptimized />
            </div>
          </a>
        ) : (
          <div className="relative h-[80vh]  w-full">
            <Image src={popupImageUrl} alt="Popup banner" fill sizes="100vw" className="object-cover" unoptimized />
          </div>
        )}
      </div>
    </div>
  );
}
