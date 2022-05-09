import type { ExternalLinkItem } from '~/types';

/**
 * Config External Anchor URLs
 *
 * The intention is so have this URL format:
 * https://oursite.com/name
 * to make it easier to type, then redirect instead of accessing directly
 *
 * The `url` can be:
 * https://redirect.com/slug
 * https://theirsite.com/username
 */

export const configExternalLinks: Array<ExternalLinkItem> = [
  {
    name: 'GitHub',
    url: 'https://a.mhaidarhanif.com/github',
    isEnabled: true,
  },
  {
    name: 'Twitter',
    url: 'https://a.mhaidarhanif.com/twitter',
    isEnabled: true,
  },
  {
    name: 'YouTube',
    url: 'https://a.mhaidarhanif.com/youtube',
    isEnabled: true,
  },
  {
    name: 'Dev',
    url: 'https://a.mhaidarhanif.com/devto',
    isEnabled: true,
  },
  {
    name: 'Medium',
    url: 'https://a.mhaidarhanif.com/medium',
    isEnabled: false,
  },
  {
    name: 'Discord',
    url: 'https://a.mhaidarhanif.com/discord',
    isEnabled: false,
  },
  {
    name: 'Telegram',
    url: 'https://a.mhaidarhanif.com/telegram',
    isEnabled: false,
  },
];
