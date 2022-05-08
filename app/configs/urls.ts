import type { ExternalLinkItem } from '~/types';

/**
 * Config URLs
 *
 * Used in the redirect routes
 */

export const configUrls = {
  GITHUB_URL: 'https://a.mhaidarhanif.com/github',
  TWITTER_URL: 'https://a.mhaidarhanif.com/twitter',
  YOUTUBE_URL: 'https://a.mhaidarhanif.com/youtube',
  DEV_URL: 'https://a.mhaidarhanif.com/devto',
  MEDIUM_URL: 'https://a.mhaidarhanif.com/medium',
  DISCORD_URL: 'https://a.mhaidarhanif.com/discord',
  TELEGRAM_URL: 'https://a.mhaidarhanif.com/telegram',
};

/**
 * Config External Anchor URLs
 *
 * The intention is so have this URL format:
 * https://oursite.com/r/name
 * to make it easier to type, then redirect instead of accessing directly
 *
 * The `url` can be:
 * /r/name
 * https://redirect.com/slug
 * https://theirsite.com/username
 */

export const configExternalLinks: Array<ExternalLinkItem> = [
  { name: 'GitHub', url: '/r/github', isEnabled: true },
  { name: 'Twitter', url: '/r/twitter', isEnabled: true },
  { name: 'YouTube', url: '/r/youtube', isEnabled: true },
  { name: 'Dev', url: '/r/dev', isEnabled: true },
  { name: 'Medium', url: '/r/medium', isEnabled: false },
  { name: 'Discord', url: '/r/discord', isEnabled: false },
  { name: 'Telegram', url: '/r/telegram', isEnabled: false },
];
