import { H1, H2, Header } from "~/components";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { MetaFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/search`, priority: 0.7 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Search`,
    description: `Search any items within the site.`,
  });
};

export default function Search() {
  return (
    <Layout variant="wide">
      <Header className="header-center">
        <H1>Search</H1>
        <H2>This is the search you're looking for</H2>
      </Header>
    </Layout>
  );
}
