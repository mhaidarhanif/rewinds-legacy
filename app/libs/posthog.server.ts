import PostHog from 'posthog-node';

import { configFeatures } from '~/configs';

const posthogApiKey = String(process.env.POSTHOG_API_KEY);
const posthogApiHost =
  String(process.env.POSTHOG_API_HOST) || 'https://app.posthog.com';
const posthogPersonalApiKey = String(process.env.POSTHOG_PERSONAL_API_KEY);

export const getPostHogClient = () => {
  if (configFeatures.posthog) {
    const posthogClient = new PostHog(posthogApiKey, {
      host: posthogApiHost,
      personalApiKey: posthogPersonalApiKey,
    });

    return posthogClient;
  }
  return null;
};
