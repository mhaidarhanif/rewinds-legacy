import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix';

import { getSession, commitSession } from '~/sessions';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  session.set('theme', 'cool');

  const data = {
    user: session.get('user'),
    theme: session.get('theme'),
    error: session.get('error'),
  };

  console.log({ data });

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  session.set('user', '123');

  // Sign In succeeded, send them to the home page.
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
