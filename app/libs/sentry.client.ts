import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

import { configFeatures } from "~/configs";

const sentryBrowserDSN = String(ENV.SENTRY_BROWSER_DSN);

export const sentryBrowserInit = () => {
  if (configFeatures.sentryBrowser) {
    Sentry.init({
      dsn: sentryBrowserDSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0, // Set to 1.0 to capture 100% of transactions for performance monitoring
    });

    if (configFeatures.sentryBrowser) {
      console.info("Sentry Browser is initialized");
    }
  }
};
