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

  console.log({ session, user: session.has('user') });

  const data = { error: session.get('error') };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));

  // const form = await request.formData();
  // const username = form.get("username");
  // const password = form.get("password");

  const user = '123';

  if (user === null) {
    session.flash('error', 'Invalid username/password');

    // Redirect back to the Sign In page with errors.
    return redirect('/signin', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  }

  session.set('user', user);

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
