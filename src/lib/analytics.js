// Thin wrapper around GA4 gtag. Safe to call even when GA isn't loaded
// (dev, ad-blockers) — calls become silent no-ops.

export function track(eventName, params = {}) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", eventName, params);
  } catch {
    /* swallow */
  }
}
