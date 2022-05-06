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
  { to: '/examples', text: 'Examples' },
  { to: '/debug', text: 'Debug' },
  { to: '/requests/rest', text: 'REST' },
  { to: '/requests/graphql', text: 'GraphQL' },
  { to: '/gallery', text: 'Gallery' },
  { to: '/subscribe', text: 'Subscribe' },
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
