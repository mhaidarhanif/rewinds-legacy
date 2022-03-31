import { createCookieSessionStorage } from 'remix';

import { getEnvServer } from '~/utils/env.server';

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'app-theme',
    secrets: [getEnvServer('SESSION_SECRET')],
    sameSite: 'lax',
    path: '/',
    expires: new Date('2100-12-12'),
    httpOnly: true,
  },
});

/**
 * Abstract out the themeStorage cookie
 * into multiple themeSession helper functions
 */
export async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));

  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return themeValue || 'dark';
    },
    setTheme: (theme: any) => {
      session.set('theme', theme);
    },
    commit: () => {
      themeStorage.commitSession(session);
    },
  };
}
