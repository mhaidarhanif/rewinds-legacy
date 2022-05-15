import { H1, H2, Header } from "~/components";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { MetaFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/pricing`, priority: 0.7 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Pricing`,
    description: `Choose the price that's suitable for you.`,
  });
};

export default function Pricing() {
  return (
    <Layout variant="wide">
      <Header className="header-center">
        <H1>Pricing Plans</H1>
        <H2>Choose what's best for you although this is just a demo</H2>
      </Header>
    </Layout>
  );
}
