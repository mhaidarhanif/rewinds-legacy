import posthog from 'posthog-js';

export { posthog };

export const posthogInit = () => {
  posthog.init(String(ENV.POSTHOG_API_KEY), {
    api_host: String(ENV.POSTHOG_API_HOST) || 'https://app.posthog.com',
  });
};
