import { json } from "@remix-run/node";

import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { gql, graphcmsClient } from "~/libs";
import { createMetaData, stringifyJSON } from "~/utils";

import type { SEOHandle, MetaFunction, LoaderFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/blog`, priority: 0.8 }];
  },
};

export const loader: LoaderFunction = async () => {
  const response = await graphcmsClient
    .query(
      gql`
        query AllArticles {
          articles {
            id
            slug
            title
            date
            excerpt
            coverImage {
              id
              url(
                transformation: {
                  image: { resize: { width: 500, height: 300, fit: clip } }
                  document: { output: { format: jpg } }
                  validateOptions: true
                }
              )
            }
          }
        }
      `,
    )
    .toPromise();

  return json({
    articles: response.data.articles,
  });
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Blog`,
    description: `Articles from Rewinds around UI, UX, styling, CSS, design system, and more.`,
  });
};

export default function Blog() {
  const { articles } = useLoaderData();

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

      <div>
        <pre>{stringifyJSON(articles)}</pre>
      </div>
    </Layout>
  );
}
