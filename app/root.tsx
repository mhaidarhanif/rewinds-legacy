import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NProgress,
  ThemeProvider,
} from "~/components";
import { configDocumentLinks } from "~/configs";
import { MessageCatch, MessageError } from "~/contents";
import { loaderSession } from "~/features";
import {
  useEffect,
  useState,
  useCatch,
  useLoaderData,
  useTransition,
} from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  HeadersFunction,
  LoaderDataSession,
} from "~/types";

export const headers: HeadersFunction = () => {
  return {
    "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
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
    if (transition.state === "idle") setIsTransitioning(false);
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
 *
 * Do not use ThemeProvider here because it will conflict with
 * the theme data in the session.
 * Unless there is a config to disable the persistence.
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
      <Layout variant="boundary">
        <MessageCatch caught={caught} />
      </Layout>
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
      <Layout variant="boundary">
        <MessageError error={error} />
      </Layout>
    </DocumentBoundary>
  );
}
