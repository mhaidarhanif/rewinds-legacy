import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NProgress,
  ThemeProvider,
  MitigationButtons,
} from '~/components';
import { configDocumentLinks } from '~/configs';
import { loaderSession } from '~/features';
import {
  useEffect,
  useState,
  useCatch,
  useLoaderData,
  useTransition,
} from '~/hooks';
import { LayoutError } from '~/layouts';
import { createMetaData } from '~/utils';

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

export const loader: LoaderFunction = loaderSession;

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

      <body>
        <NProgress isAnimating={isTransitioning} />

        <ThemeProvider specifiedTheme={data?.theme}>{children}</ThemeProvider>

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
 * Document Boundary for Catch and Error
 */

export function DocumentBoundary({ title, children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <Scripts />
        <ScrollRestoration />
        <LiveReload />
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
    <DocumentBoundary title="Hmm, something went wrong">
      <LayoutError>
        <div className="prose-config">
          <h1 className="text-warning-500">Wut?</h1>
          <p>Hmm, something went wrong.</p>
        </div>

        <MitigationButtons />

        <div className="prose-config">
          <h3>Status Message</h3>
          <p>
            {caught.status} {caught.statusText}
          </p>
          <h3>Caught error data</h3>
          <pre>{JSON.stringify(caught, null, 2)}</pre>
        </div>
      </LayoutError>
    </DocumentBoundary>
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
    <DocumentBoundary title="Error, something crashed">
      <LayoutError className="prose-config">
        <div className="prose-config">
          <h1 className="text-error-500">Error!</h1>
          <p>Sorry, something crashed and we didn't expect that to happen.</p>
        </div>

        <MitigationButtons />

        <div className="prose-config">
          <h3>Error message</h3>
          <pre>{error.message}</pre>
          <h3>Stack trace</h3>
          <pre>{error.stack as string}</pre>
        </div>
      </LayoutError>
    </DocumentBoundary>
  );
}
