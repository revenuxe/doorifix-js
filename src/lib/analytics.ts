export const GOOGLE_ADS_ID = "AW-18401373752";
export const GOOGLE_ADS_CALL_ID = "AW-16833815874";
export const GOOGLE_ADS_CALL_CONVERSION = "AW-16833815874/Bmo4COzZkOUcEMLK_to-";
export const GOOGLE_ANALYTICS_ID = "G-ZLZMP5Y3DK";
export const GOOGLE_SHARED_TAG_ID = "G-CS8DWTJQPC";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends only non-identifying interaction data. Keep names, phone numbers,
 * email addresses, addresses, and message content out of client analytics.
 */
export function trackEvent(name: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return;

  const context = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...parameters,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, context);
    return;
  }

  // Queue events if the Google script is still loading. This also makes the
  // helper safe in slower mobile connections and with deferred script loading.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", name, context]);
}

/** Sends the exact Google Ads conversion event for a click-to-call action. */
export function trackGoogleAdsConversion(sendTo: string, eventCallback?: () => void) {
  if (typeof window === "undefined") return;

  const parameters = { send_to: sendTo, event_callback: eventCallback };
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", parameters);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", "conversion", parameters]);
}
