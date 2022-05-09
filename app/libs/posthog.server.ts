import PostHog from 'posthog-node';

import { configFeatures } from '~/configs';

// Server
export const posthogNode = new PostHog(String(process.env.POSTHOG_API_KEY), {
  host: String(process.env.POSTHOG_API_HOST) || 'https://app.posthog.com',
});

export const getPosthogNode = () => {
  if (configFeatures.posthog) {
    return posthogNode;
  }
  return null;
};
