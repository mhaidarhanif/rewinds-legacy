export const configNavigationLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/examples', text: 'Examples' },
  { to: '/debug', text: 'Debug' },
  { to: '/requests/rest', text: 'REST' },
  { to: '/requests/graphql', text: 'GraphQL' },
];

export const configNavigationLinksMenu = [
  {
    name: 'Pages',
    links: [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
      { to: '/examples', text: 'Examples' },
      { to: '/debug', text: 'Debug' },
      { to: '/requests', text: 'Requests' },
      { to: '/requests/rest', text: 'Request REST API' },
      { to: '/requests/graphql', text: 'Request GraphQL' },
    ],
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
