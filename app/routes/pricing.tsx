import { H1, H2, Header } from "~/components";
import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/pricing`, priority: 0.7 }];
  },
};

export default function PricingRoute() {
  return (
    <Layout variant="wide">
      <Header className="header-center">
        <H1>Pricing Plans</H1>
        <H2>Choose what's best for you although this is just a demo</H2>
      </Header>
    </Layout>
  );
}
