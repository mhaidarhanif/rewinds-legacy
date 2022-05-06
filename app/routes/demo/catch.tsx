import { Layout } from '~/layouts';

import type { LoaderFunction } from '~/types';

export const loader: LoaderFunction = async () => {
  throw new Response('Not Found', {
    status: 404,
  });
};

export default function DemoCatchRoute() {
  return (
    <Layout>
      <h1>Demo Catch</h1>
    </Layout>
  );
}
