import { Header } from "~/components";
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
        <h1>Pricing</h1>
        <h2>Choose what's the best plan for you</h2>
        <p>(Note this is just a demo)</p>
      </Header>
    </Layout>
  );
}
