import PostHog from 'posthog-node';

// Server
export const posthogNode = new PostHog(String(process.env.POSTHOG_API_KEY), {
  host: String(process.env.POSTHOG_API_HOST) || 'https://app.posthog.com',
});
