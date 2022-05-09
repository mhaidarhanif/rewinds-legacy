import { H1, H2, Header } from '~/components';
import { Layout } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/pricing`, priority: 0.7 }];
  },
};

export default function PricingRoute() {
  return (
    <Layout>
      <Header>
        <H1>Pricing Plans</H1>
        <H2>Choose what's best for you</H2>
      </Header>
    </Layout>
  );
}
