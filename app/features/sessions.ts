import { createCookieSessionStorage, json, redirect } from '@remix-run/node';

import { configStyle, configAvailableThemes } from '~/configs';
import { dateFns } from '~/libs';
import { getEnv, getEnvServer } from '~/utils';

import type {
  ActionFunction,
  LoaderDataSession,
  LoaderFunction,
  SpecifiedTheme,
} from '~/types';

const currentDate = Date.now();
const expiryInDays = 30;
const expiryInSeconds = dateFns.daysToSeconds(expiryInDays);
const expiryDate = dateFns.addDays(currentDate, expiryInDays);

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
    cookie: {
      name: '__session',

      // all of these are optional
      // domain: "mhaidarhanif.com",
      maxAge: expiryInSeconds, // precede `expires`
      expires: expiryDate,
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secrets: [getEnvServer('SESSION_SECRET')],
      secure: true,
    },
  });

export const loaderSession: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  // Only parse if theme string exist
  const themeParsed: SpecifiedTheme = themeFromSession
    ? JSON.parse(themeFromSession)
    : configStyle?.theme;

  const currentTheme = configAvailableThemes.find((item) => {
    return item.id === themeParsed.colorScheme;
  });

  const data: LoaderDataSession = {
    theme: {
      ...themeParsed,
      currentTheme,
    },
    user: (await session.get('user')) || {},
    error: (await session.get('error')) || false,
    ENV: getEnv(),
  };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const actionSession: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};
