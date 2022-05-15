import * as SentryNode from "@sentry/node";
import * as Tracing from "@sentry/tracing";
// Importing @sentry/tracing patches the global hub for tracing to work.
import "@sentry/tracing";
// If you want to use `@sentry/tracing` in your project directly, use a named import instead:
// import * as SentryTracing from "@sentry/tracing"
// Unused named imports are not guaranteed to patch the global hub.

import { configFeatures } from "~/configs";

export { SentryNode };

const sentryNodeDSN = String(process.env.SENTRY_NODE_DSN);

export const sentryNodeInit = () => {
  SentryNode.init({
    dsn: sentryNodeDSN,
    tracesSampleRate: 1.0, // Set to 1.0 to capture 100% of transactions for performance monitoring or using tracesSampler for finer control
  });

  if (configFeatures.console) {
    console.info("Sentry Node is initialized");
  }

  return SentryNode;
};
