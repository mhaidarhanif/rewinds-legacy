import type { ExternalLinkItem } from '~/types';

export const configExternalLinks: Array<ExternalLinkItem> = [
  { name: 'GitHub', url: '/r/github', isEnabled: true },
  { name: 'Twitter', url: '/r/twitter', isEnabled: true },
  { name: 'YouTube', url: '/r/youtube', isEnabled: true },
  { name: 'Dev', url: '/r/dev', isEnabled: true },
  { name: 'Medium', url: '/r/medium', isEnabled: false },
  { name: 'Discord', url: '/r/discord', isEnabled: false },
  { name: 'Telegram', url: '/r/telegram', isEnabled: false },
];
