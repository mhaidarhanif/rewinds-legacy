import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

import {
  googleAnalyticsInit,
  posthogInit,
  sentryBrowserInit,
  splitbeeInit,
} from "~/libs";
import { isProductionAllowed } from "~/utils";

hydrate(<RemixBrowser />, document);

if (isProductionAllowed) {
  googleAnalyticsInit(); // Google Analytics
  splitbeeInit(); // Splitbee Analytics
  posthogInit(); // PostHog Product Analytics

  // WIP: Need to conform with React Router v6
  sentryBrowserInit(); // Sentry App Monitoring and Error Tracking
}
