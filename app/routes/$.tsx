import { redirect } from 'remix';
import { configAppFeatures, configExternalLinks } from '~/configs';
import { MessageErrorNotFound } from '~/contents/messages';
import { Layout } from '~/layouts';

import type { LoaderFunction, ActionFunction, MetaFunction } from '~/types';

/**
 * Splat Route
 *
 * Catch everything that is not specified in the routes
 * Similar with CatchBoundary but this one is inside ThemeProvider
 *
 * https://remix.run/docs/en/v1/api/conventions#splat-routes
 */

export const meta: MetaFunction = () => {
  return {
    title: 'Error 404 (Not Found)!?',
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const pathName = params['*'];
  if (configAppFeatures.console) console.info(pathName);

  const externalLink = configExternalLinks.find((item) => {
    return item.name.toLowerCase() === pathName;
  });

  if (externalLink) {
    return redirect(externalLink.url);
  }

  return null;
};

export const action: ActionFunction = async ({ params }) => {
  const pathName = params['*'];
  if (configAppFeatures.console) console.info(pathName);
  return null;
};

export default function SplatRoute() {
  return (
    <Layout>
      <MessageErrorNotFound />
    </Layout>
  );
}
