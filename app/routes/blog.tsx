import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { SEOHandle, MetaFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/blog`, priority: 0.8 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Blog`,
    description: `Articles from Rewinds around UI, UX, styling, CSS, design system, and more.`,
  });
};

export default function Blog() {
  return (
    <Layout variant="medium">
      <header className="header">
        <h1>Blog</h1>
        <h2>All available articles</h2>
        <p>
          Discussing around UI, UX, styling, CSS, design system, and more
          beyond.
        </p>
      </header>
    </Layout>
  );
}
