/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import { otherRootRouteHandlers } from "./other-root-routes.server";

import type { EntryContext } from "@remix-run/node";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  for (const handler of otherRootRouteHandlers) {
    const otherRouteResponse = await handler(request, remixContext);
    if (otherRouteResponse) return otherRouteResponse;
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
