import { useLenis } from "lenis/react";
import type { ScrollToOptions } from "lenis";

export function useLenisScrollTo() {
  const lenis = useLenis();

  const scrollTo = (
    target: Parameters<NonNullable<typeof lenis>["scrollTo"]>[0],
    options?: ScrollToOptions
  ) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    } else {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return { scrollTo, lenis };
}
