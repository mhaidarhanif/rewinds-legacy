import { json } from '@remix-run/node';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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
import { Layout } from '~/layouts';
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

/**
 * Main document component to be used in:
 * - App
 * - CatchBoundary
 * - ErrorBoundary
 */

interface DocumentProps {
  title?: string;
  children: React.ReactNode;
}

export function Document({ title, children }: DocumentProps) {
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
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>

      <body className="scroll-smooth transition-colors duration-300">
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

/**
 * Catch an expected error
 * Status: 400-500
 */

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title="Hmm, something went wrong">
      <Layout className="prose-config">
        <h1 className="text-warning-500">Wut?</h1>
        <p>
          Hmm, something went wrong. Let's just{' '}
          <a href="/">go back to homepage</a>.
        </p>
        <h3>Status Message</h3>
        <p>
          {caught.status} {caught.statusText}
        </p>
        <h3>Caught error data</h3>
        <pre>{JSON.stringify(caught, null, 2)}</pre>
      </Layout>
    </Document>
  );
}

/**
 * Error means there is an unexpected error
 */
interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.error(error);

  return (
    <Document title="Error, something crashed">
      <Layout className="prose-config">
        <h1 className="text-error-500">Error!</h1>
        <p>
          Sorry, something crashed and we didn't expect that to happen. But no
          worries, we can just <a href="/">go back to homepage</a>.
        </p>
        <h3>Error message</h3>
        <pre>{error.message}</pre>
        <h3>Stack trace</h3>
        <pre>{error.stack as string}</pre>
      </Layout>
    </Document>
  );
}
