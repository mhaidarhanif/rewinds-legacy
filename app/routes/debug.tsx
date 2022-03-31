import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix';

import { configDefaults } from '~/configs';
import { getSession, commitSession } from '~/sessions';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  // Only prase if theme string exist
  const themeParsed = themeFromSession
    ? JSON.parse(themeFromSession)
    : configDefaults?.theme;

  const data = {
    user: await session.get('user'),
    theme: themeParsed,
    error: await session.get('error'),
  };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function DebugRoute() {
  const data = useLoaderData();

  return (
    <article className="prose dark:prose-invert">
      <h1>Debug</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </article>
  );
}
