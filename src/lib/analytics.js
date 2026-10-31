let analyticsReady = false;

export function initializeAnalytics() {
  if (typeof document === "undefined" || analyticsReady) return;
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (!domain) return;

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = domain;
  script.src = import.meta.env.VITE_PLAUSIBLE_SCRIPT_URL || "https://plausible.io/js/script.js";
  document.head.appendChild(script);
  analyticsReady = true;
}

export function trackEvent(name, props) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") return;
  window.plausible(name, props ? { props } : undefined);
}
