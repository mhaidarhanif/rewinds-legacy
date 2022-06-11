import { redirect } from "@remix-run/node";

import { configFeatures, configExternalLinks } from "~/configs";
import { MessageErrorNotFound } from "~/contents/messages";
import { Layout } from "~/layouts";

import type {
  SEOHandle,
  LoaderFunction,
  ActionFunction,
  MetaFunction,
} from "~/types";

/**
 * Splat Route
 *
 * Catch everything that is not specified in the routes
 * Similar with CatchBoundary but this one is inside ThemeProvider
 *
 * https://remix.run/docs/en/v1/api/conventions#splat-routes
 */

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const meta: MetaFunction = () => {
  return {
    title: "Error 404 (Not Found)!?",
  };
};

/**
 * Redirect to external link url instead of showing not found information
 */

export const loader: LoaderFunction = async ({ params }) => {
  const pathName = params["*"];
  if (configFeatures.console) console.info(pathName);

  const externalLink = configExternalLinks.find((item) => {
    return item.slug === pathName;
  });

  if (externalLink) {
    return redirect(externalLink.url);
  }

  return null;
};

/**
 * Currently just showcase of using params
 */

export const action: ActionFunction = async ({ params }) => {
  const pathName = params["*"];
  if (configFeatures.console) console.info(pathName);
  return null;
};

/**
 * Show not found information if there is no redirect link url found
 */

export default function Splat() {
  return (
    <Layout>
      <MessageErrorNotFound />
    </Layout>
  );
}
