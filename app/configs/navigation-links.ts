/**
 * Config Navigation Links
 *
 * To be used in the navigation bar in 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/subscribe', text: 'Subscribe' },
  { to: '/debug', text: 'Debug' },
  { to: '/examples', text: 'Examples' },
  { to: '/examples/rest', text: 'REST' },
  { to: '/examples/graphql', text: 'GraphQL' },
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
