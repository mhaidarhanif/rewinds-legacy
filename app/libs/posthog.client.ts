import posthog from "posthog-js";

import { configFeatures } from "~/configs";

export { posthog };

const posthogApiKey = String(ENV.POSTHOG_API_KEY);
const posthogApiHost =
  String(ENV.POSTHOG_API_HOST) || "https://app.posthog.com";

export const posthogInit = () => {
  if (configFeatures.posthog) {
    posthog.init(posthogApiKey, { api_host: posthogApiHost });
    if (configFeatures.console) console.info("PostHog is initialized");
  }
};
