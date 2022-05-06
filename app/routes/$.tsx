/* eslint-disable no-console */
import { useParams } from '@remix-run/react';

import { RemixLink } from '~/components';
import { Layout } from '~/layouts';

import type { LoaderFunction, ActionFunction, MetaFunction } from '~/types';

export const meta: MetaFunction = () => {
  return {
    title: 'Error 404 (Not Found)!?',
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  console.info(params['*']);
  return null;
};

export const action: ActionFunction = async ({ params }) => {
  console.info(params['*']);
  return null;
};

/**
 * Splat everything that is not specified in the routes
 * Similar with CatchBoundary
 */

export default function SplatRoute() {
  const params = useParams();
  const pathName = params['*'];

  return (
    <Layout className="prose-config">
      <h1 className="text-info-500">404</h1>
      <h2>Sorry, page not found</h2>
      <p>The requested URL /{pathName} was not found</p>
      <RemixLink
        to="/"
        className="btn-solid btn btn-lg rounded-base"
        data-color="primary"
      >
        Back to home page
      </RemixLink>
    </Layout>
  );
}
