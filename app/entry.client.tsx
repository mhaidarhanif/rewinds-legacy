import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

import { googleAnalyticsInit, posthogInit, splitbeeInit } from "~/libs";
import { isProductionAllowed } from "~/utils";

hydrate(<RemixBrowser />, document);

if (isProductionAllowed) {
  googleAnalyticsInit(); // Google Analytics
  splitbeeInit(); // Splitbee Analytics
  posthogInit(); // PostHog Product Analytics
}

// If the browser supports Service Worker API
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Register after the page complete the load
    navigator.serviceWorker.register("/sw.js");
  });
}
