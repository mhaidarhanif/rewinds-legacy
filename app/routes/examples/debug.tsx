import { H1, Pre, RadixScrollArea } from '~/components';
import { loaderSession } from '~/features';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';

import type { LoaderFunction } from '~/types';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const loader: LoaderFunction = loaderSession;

export default function DebugRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <H1>Debug</H1>

      <RadixScrollArea>
        <Pre>{data}</Pre>
      </RadixScrollArea>
    </Layout>
  );
}
