"use client";

declare global {
  interface Window {
    whop?: {
      track: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export function trackEvent(name: "estimate_requested" | "service_viewed" | "deposit_started", properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    // 1. If Whop injected tracker is present on *.whop.app
    if (window.whop && typeof window.whop.track === "function") {
      window.whop.track(name, properties);
    }
    // 2. Log in console for test verification and screen recording
    console.log(`[Whop Event Tracked] => ${name}`, properties);
  }
}
