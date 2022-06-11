import type { ExternalLinkItems } from "~/types";

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

export const configExternalLinks: ExternalLinkItems = [
  {
    slug: "github",
    name: "GitHub",
    url: "https://a.mhaidarhanif.com/github",
  },
  {
    slug: "twitter",
    name: "Twitter",
    url: "https://a.mhaidarhanif.com/twitter",
  },
  {
    slug: "youtube",
    name: "YouTube",
    url: "https://a.mhaidarhanif.com/youtube",
  },
  {
    slug: "dev",
    name: "Dev",
    url: "https://a.mhaidarhanif.com/devto",
  },
  {
    slug: "medium",
    name: "Medium",
    url: "https://a.mhaidarhanif.com/medium",
    isDisabled: true,
  },
  {
    slug: "discord",
    name: "Discord",
    url: "https://a.mhaidarhanif.com/discord",
    isDisabled: true,
  },
  {
    slug: "telegram",
    name: "Telegram",
    url: "https://a.mhaidarhanif.com/telegram",
    isDisabled: true,
  },
];
