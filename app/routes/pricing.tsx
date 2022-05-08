import { H1 } from '~/components';
import { Layout } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/pricing`, priority: 0.8 }];
  },
};

export default function BlogRoute() {
  return (
    <Layout>
      <H1>Pricing Plans</H1>
    </Layout>
  );
}
