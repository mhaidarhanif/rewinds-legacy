import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import { ThemeProvider } from '~/components';

import type { MetaFunction } from 'remix';

import styles from '~/styles/app.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Tailwind Starter by @mhaidarhanif',
    description: 'Remix starter kit with Tailwind CSS family of libraries',
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
