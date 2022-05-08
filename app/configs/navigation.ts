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
  { to: '/examples', text: 'Examples' },
  { to: '/examples/button', text: 'Example: Button' },
  { to: '/examples/form', text: 'Example: Form' },
  { to: '/examples/navigation-menu', text: 'Example: Navigation Menu' },
  { to: '/examples/alert', text: 'Example: Alert' },
  { to: '/examples/toast', text: 'Example: Toast' },
  { to: '/examples/notification', text: 'Example: Notification' },
];

export const configNavigationContentExamples2 = [
  { to: '/examples/rest', text: 'Example: REST API' },
  { to: '/examples/graphql', text: 'Example: GraphQL' },
  { to: '/examples/catch', text: 'Example: Catch' },
  { to: '/examples/error', text: 'Example: Error' },
  { to: '/examples/debug', text: 'Example: Debug' },
];

/**
 * Config Navigation Links
 *
 * Used in the Navigation Bar with 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationLinks = [
  { to: '/', text: 'Home' },
  ...configNavigationContentPages,
  ...configNavigationContentExamples1,
  ...configNavigationContentExamples2,
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
