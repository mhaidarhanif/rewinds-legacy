import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';

import { H1, Layout, ThemeProvider } from '~/components';

import styles from '~/styles/app.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Tailwind Starter Kit by @mhaidarhanif',
    description: 'Remix starter kit with Tailwind CSS family of libraries',
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
  };
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
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>

        <body>
          <Layout>{children}</Layout>

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
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
