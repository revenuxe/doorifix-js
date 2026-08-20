"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const CTA_PATTERN = /\b(book|call|contact|submit|send|whatsapp|schedule|enquir|request)\b/i;

function elementLabel(element: Element) {
  return (element.getAttribute("data-track-cta") || element.getAttribute("aria-label") || element.textContent || "cta")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}

/** Tracks navigation-aware page views and high-value clicks across every page. */
export function GoogleAdsTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPage = useRef("");

  useEffect(() => {
    const page = `${pathname}${searchParams.size ? `?${searchParams.toString()}` : ""}`;
    if (page === lastPage.current) return;
    lastPage.current = page;
    trackEvent("page_view", { page_path: page, page_title: document.title });
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_call", { contact_method: "phone", cta_label: elementLabel(link) });
        return;
      }
      if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
        trackEvent("whatsapp_click", { contact_method: "whatsapp", cta_label: elementLabel(link) });
        return;
      }

      const cta = target.closest("[data-track-cta], button, [role='button'], a");
      if (cta && (cta.hasAttribute("data-track-cta") || CTA_PATTERN.test(elementLabel(cta)))) {
        trackEvent("cta_click", { cta_label: elementLabel(cta), cta_type: cta.tagName.toLowerCase() });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
