/**
 * Config Navigation Links
 *
 * Used in the Navigation Bar with 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/subscribe', text: 'Subscribe' },
  { to: '/debug', text: 'Debug' },
  { to: '/examples', text: 'Examples' },
  { to: '/examples/button', text: 'Example Button' },
  { to: '/examples/rest', text: 'Example REST' },
  { to: '/examples/graphql', text: 'Example GraphQL' },
  // In large screen, the auth links are as buttons
];

export const configNavigationLinksMenu = [
  {
    name: 'Pages',
    links: [...configNavigationLinks],
  },
  {
    // In small screen, the auth links are inside the menu modal
    name: 'Account',
    links: [
      { to: '/signup', text: 'Sign up' },
      { to: '/signin', text: 'Sign in' },
      { to: '/signout', text: 'Sign out' },
    ],
  },
];

/**
 * Config Navigation Menu Content Links
 *
 * Used in the Navigation Menu with Radix UI
 */

export const configNavigationContentPages = [
  { to: '/about', text: 'About' },
  { to: '/blog', text: 'Blog' },
  { to: '/subscribe', text: 'Subscribe' },
];

export const configNavigationContentExamples1 = [
  { to: '/examples/button', text: 'Button' },
  { to: '/examples/form', text: 'Form' },
  { to: '/examples/navigation-menu', text: 'Navigation Menu' },
];

export const configNavigationContentExamples2 = [
  { to: '/examples/rest', text: 'REST API' },
  { to: '/examples/graphql', text: 'GraphQL' },
  { to: '/examples/debug', text: 'Debug' },
];
