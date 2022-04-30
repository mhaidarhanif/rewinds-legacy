export const configNavigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/examples', text: 'Examples' },
  { to: '/debug', text: 'Debug' },
  { to: '/requests', text: 'Requests' },
  { to: '/requests/rest', text: 'REST' },
  { to: '/requests/graphql', text: 'GraphQL' },
  { to: '/subscribe', text: 'Subscribe' },
];

export const configNavigationLinksMenu = [
  {
    name: 'Pages',
    links: [...configNavigationLinks],
  },
  {
    name: 'Account',
    links: [
      { to: '/signup', text: 'Sign up' },
      { to: '/signin', text: 'Sign in' },
      { to: '/signout', text: 'Sign out' },
    ],
  },
];
