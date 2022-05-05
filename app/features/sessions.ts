import { createCookieSessionStorage } from 'remix';

import { dateFns } from '~/libs';
import { getEnvServer } from '~/utils';

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
