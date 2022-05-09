/**
 * Config Navigation Menu Content Links
 *
 * Used in the Navigation Menu with Radix UI
 */

export const configNavigationPages = [
  { to: '/about', text: 'About' },
  { to: '/blog', text: 'Blog' },
  { to: '/subscribe', text: 'Subscribe' },
];

export const configNavigationExamples1 = [
  { to: '/examples', text: 'Examples' },
  { to: '/examples/button', text: 'Example: Button' },
  { to: '/examples/badge', text: 'Example: Badge' },
  { to: '/examples/form', text: 'Example: Form' },
  { to: '/examples/alert', text: 'Example: Alert' },
  { to: '/examples/toast', text: 'Example: Toast' },
  { to: '/examples/notification', text: 'Example: Notification' },
  { to: '/examples/navigation-menu', text: 'Example: Navigation Menu' },
];

export const configNavigationExamples2 = [
  { to: '/examples/rest', text: 'Example: REST API' },
  { to: '/examples/graphql', text: 'Example: GraphQL' },
  { to: '/examples/catch', text: 'Example: Catch' },
  { to: '/examples/error', text: 'Example: Error' },
  { to: '/examples/debug', text: 'Example: Debug' },
];

export const configNavigationLayouts = [
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

export const configNavigationBarLinks = [
  { to: '/', text: 'Home' },
  ...configNavigationPages,
  ...configNavigationExamples1,
  ...configNavigationExamples2,
  // In large screen, the auth links are as buttons
];

/**
 * Config Navigation Menu
 *
 * Used in the Navigation Menu Button for small screen
 */

export const configNavigationMenu = [
  {
    name: 'Pages',
    links: [...configNavigationBarLinks],
  },
  {
    // In small screen, the auth links are in the Dropdown Menu
    name: 'Account',
    links: [
      { to: '/signup', text: 'Sign up' },
      { to: '/signin', text: 'Sign in' },
      { to: '/signout', text: 'Sign out' },
    ],
  },
];
