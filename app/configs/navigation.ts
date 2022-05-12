import type { ConfigNavigation, LinkItem, LinkItems } from '~/types';

/**
 * Config Navigation Links
 *
 * Used in:
 * - Multiple purpose for other navigation components
 * - Navigation Menu with Radix UI that has complex layout and positioning
 */

export const configNavigationHome: LinkItem = { to: '/', text: 'Home' };

export const configNavigationPages: LinkItems = [
  { to: '/about', text: 'About' },
  { to: '/blog', text: 'Blog' },
  { to: '/subscribe', text: 'Subscribe' },
  { to: '/pricing', text: 'Pricing' },
  { to: '/search', text: 'Search' },
];

export const configNavigationAccount: LinkItems = [
  { to: '/signup', text: 'Sign up' },
  { to: '/signin', text: 'Sign in' },
  { to: '/signout', text: 'Sign out' },
];

export const configNavigationEducation: LinkItems = [
  { to: '/learn', text: 'Learn' },
  { to: '/tracks', text: 'Tracks' },
  { to: '/members', text: 'Members' },
  { to: '/projects', text: 'Projects' },
  { to: '/discussions', text: 'Discussions' },
];

export const configNavigationCareer: LinkItems = [
  { to: '/work', text: 'Work' },
  { to: '/companies', text: 'Companies' },
  { to: '/jobs', text: 'Jobs' },
  { to: '/freelance', text: 'Freelance' },
];

export const configNavigationExamples1: LinkItems = [
  { to: '/examples', text: 'Examples' },
  { to: '/examples/button', text: 'Example: Button' },
  { to: '/examples/badge', text: 'Example: Badge' },
  { to: '/examples/form', text: 'Example: Form' },
  { to: '/examples/alert', text: 'Example: Alert' },
  { to: '/examples/toast', text: 'Example: Toast' },
  { to: '/examples/notification', text: 'Example: Notification' },
  { to: '/examples/navigation-menu', text: 'Example: Navigation Menu' },
];

export const configNavigationExamples2: LinkItems = [
  { to: '/examples/rest', text: 'Example: REST API' },
  { to: '/examples/graphql', text: 'Example: GraphQL' },
  { to: '/examples/catch', text: 'Example: Catch' },
  { to: '/examples/error', text: 'Example: Error' },
  { to: '/examples/debug', text: 'Example: Debug' },
];

export const configNavigationLayouts: LinkItems = [
  { to: '/layouts/common', text: 'Common' },
  { to: '/layouts/full', text: 'Full' },
  { to: '/layouts/wide', text: 'Wide' },
  { to: '/layouts/boundary', text: 'Boundary' },
];

/**
 * Config Navigation Links
 *
 * Used in the Navigation Bar with 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationBarLinks: LinkItems = [
  configNavigationHome,
  ...configNavigationPages,
  ...configNavigationExamples1,
  ...configNavigationExamples2,
  // In large screen, the auth links are as buttons
];

/**
 * Config Navigation Menu
 *
 * Used in:
 * - Navigation Menu Button for small screen with Headless UI
 * - Navigation Dropdown Menu for small screen with Radix UI
 */

export const configNavigationMenu: ConfigNavigation = [
  {
    name: 'Pages',
    links: [configNavigationHome, ...configNavigationPages],
  },
  {
    // In small screen, the auth links are in the Dropdown Menu
    name: 'Account',
    links: [...configNavigationAccount],
  },
];

/**
 * Config Navigation Sitemap
 *
 * Used in the Footer with sitemap
 */

export const configNavigationSitemap: ConfigNavigation = [
  {
    name: 'Pages',
    links: [configNavigationHome, ...configNavigationPages],
  },
  {
    name: 'Account',
    links: [...configNavigationAccount],
  },
  {
    name: 'Education',
    links: [...configNavigationEducation],
  },
  {
    name: 'Career',
    links: [...configNavigationCareer],
  },
  {
    name: 'Examples',
    links: [...configNavigationExamples1, ...configNavigationExamples2],
  },
];
