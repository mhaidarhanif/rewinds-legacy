import { configAppFeatures } from '~/configs';
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
  if (configAppFeatures.console) console.info(params['*']);
  return null;
};

export const action: ActionFunction = async ({ params }) => {
  if (configAppFeatures.console) console.info(params['*']);
  return null;
};

export default function SplatRoute() {
  return (
    <Layout>
      <MessageErrorNotFound />
    </Layout>
  );
}
