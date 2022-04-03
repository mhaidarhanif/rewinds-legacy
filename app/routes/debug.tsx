import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix';

import { H1, H2, Pre, RadixScrollArea } from '~/components';
import { configAvailableThemes, configApp, configThemes } from '~/configs';
import { getSession, commitSession } from '~/sessions';
import { Theme } from '~/types';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  const themeParsed: Theme = themeFromSession
    ? JSON.parse(themeFromSession)
    : configApp?.theme;

  const sessionInfo = {
    theme: themeParsed,
    user: (await session.get('user')) || {},
    error: (await session.get('error')) || false,
  };

  const currentTheme = configAvailableThemes.find((item) => {
    return item.id === themeParsed.colorScheme;
  });

  return json({
    sessionInfo,
    currentTheme,
    themes: configThemes,
    availableThemes: configAvailableThemes,
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
  const { sessionInfo, currentTheme, themes, availableThemes } =
    useLoaderData();

  return (
    <div>
      <H1>Debug</H1>

      <H2>Session Data</H2>
      <Pre data={sessionInfo} />

      <H2>Current Theme</H2>
      <Pre data={currentTheme} />

      <H2>Config Themes</H2>
      <RadixScrollArea>
        <Pre data={themes} />
      </RadixScrollArea>

      <H2>Config Available Themes</H2>
      <RadixScrollArea>
        <Pre data={availableThemes} />
      </RadixScrollArea>
    </div>
  );
}
