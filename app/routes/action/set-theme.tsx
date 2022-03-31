import { json, redirect } from 'remix';

import { getThemeSession } from '~/utils';

import type { ActionFunction } from 'remix';

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get('theme');

  themeSession.setTheme(theme);

  return json(
    { success: true },
    { headers: { 'Set-Cookie': await themeSession.commit() } }
  );
};

export const loader = () => {
  return redirect('/', { status: 404 });
};
