import { json, redirect } from 'remix';

import { configApp } from '~/configs';
import { commitSession, getSession } from '~/sessions';

import type { ActionFunction } from 'remix';

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get('theme') || configApp?.theme;

  session.set('theme', theme);

  return json(
    { success: true },
    { headers: { 'Set-Cookie': await commitSession(session) } }
  );
};

export const loader = () => {
  return redirect('/', { status: 404 });
};

export default function SetTheme() {
  return <div>Sorry this is hidden</div>;
}
