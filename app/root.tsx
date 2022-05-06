import { json } from '@remix-run/node';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  H1,
  NProgress,
  ThemeProvider,
} from '~/components';
import { configApp, configDocumentLinks } from '~/configs';
import { commitSession, getSession } from '~/features';
import {
  useEffect,
  useState,
  useCatch,
  useLoaderData,
  useTransition,
} from '~/hooks';
import { createMetaData, getEnv } from '~/utils';

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  HeadersFunction,
  LoaderDataSession,
} from '~/types';

export const headers: HeadersFunction = () => {
  return {
    'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
  };
};

export const links: LinksFunction = () => {
  return configDocumentLinks;
};

export const meta: MetaFunction = () => {
  return createMetaData();
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const themeFromSession = await session.get('theme');

  // Only parse if theme string exist
  const themeParsed = themeFromSession
    ? JSON.parse(themeFromSession)
    : configApp?.theme;

  const data: LoaderDataSession = {
    user: await session.get('user'),
    theme: themeParsed,
    error: await session.get('error'),
    ENV: getEnv(),
  };

  return json(data, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

interface DocumentProps {
  children: React.ReactNode;
}

export function Document({ children }: DocumentProps) {
  const data = useLoaderData<LoaderDataSession>();
  const transition = useTransition();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (transition.state === 'idle') setIsTransitioning(false);
    else setIsTransitioning(true);
  }, [transition.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="scroll-smooth">
        <ThemeProvider specifiedTheme={data?.theme}>
          <NProgress isAnimating={isTransitioning} />
          {children}
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {data?.ENV && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data?.ENV)};`,
            }}
          />
        )}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <H1>Remix Caught</H1>

      <div>
        <p>Status: {caught.status}</p>
        <pre>
          <code>{JSON.stringify(caught.data, null, 2)}</code>
        </pre>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <H1>Remix Error</H1>

      <div>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    </Document>
  );
}
