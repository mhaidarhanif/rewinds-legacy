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
    <Layout variant="medium">
      <header>
        <h1>Search</h1>
        <h2>This is the search you're looking for.</h2>
      </header>
    </Layout>
  );
}
