/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { renderToString } from 'react-dom/server';
import { RemixServer } from 'remix';

import { otherRootRouteHandlers } from './other-root-routes.server';

import type { EntryContext } from 'remix';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  for (const handler of otherRootRouteHandlers) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
