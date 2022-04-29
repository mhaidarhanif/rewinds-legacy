/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-mutable-exports */
// Dependencies
import { configMetaDefault } from '~/configs';
import { generateRobotsTxt, generateSitemap } from '~/utils';

import type { EntryContext } from 'remix';

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null;

export const otherRootRoutes: Record<string, Handler> = {
  '/sitemap.xml': async (request, remixContext) => {
    return generateSitemap(request, remixContext, {
      siteUrl: configMetaDefault.url,
      headers: {
        'Cache-Control': `public, max-age=${60 * 5}`,
      },
    });
  },
  '/robots.txt': async () => {
    return generateRobotsTxt([
      { type: 'sitemap', value: `${configMetaDefault.url}/sitemap.xml` },
    ]);
  },
};

export const otherRootRouteHandlers: Array<Handler> = [
  ...Object.entries(otherRootRoutes).map(([path, handler]) => {
    return (request: Request, remixContext: EntryContext) => {
      if (new URL(request.url).pathname !== path) return null;
      return handler(request, remixContext);
    };
  }),
];
