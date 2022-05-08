import posthog from 'posthog-js';

import { configAppFeatures } from '~/configs';

export { posthog };

export const posthogInit = () => {
  if (configAppFeatures.posthog) {
    posthog.init(String(ENV.POSTHOG_API_KEY), {
      api_host: String(ENV.POSTHOG_API_HOST) || 'https://app.posthog.com',
    });
  }
};
