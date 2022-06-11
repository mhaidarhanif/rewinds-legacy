import { json } from "@remix-run/node";

import { BlogArticles } from "~/contents";
import { useCatch, useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { getArticles } from "~/models";
import { createMetaData } from "~/utils";

import type {
  MetaFunction,
  LoaderFunction,
  LoaderDataBlog,
  SEOHandle,
  Article,
} from "~/types";

/**
 * Generate sitemap for blog route and the articles.
 */
export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const articles = await getArticles();
    return [
      { route: `/blog`, priority: 0.8 },
      ...articles.map(({ slug }: Article) => {
        return { route: `/blog/${slug}`, priority: 0.8 };
      }),
    ];
  },
};

export const loader: LoaderFunction = async () => {
  const articles = await getArticles();

  return json<LoaderDataBlog>({ articles });
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Blog`,
    description: `Articles from Rewinds around UI, UX, styling, CSS, design system, and more.`,
  });
};

export default function Blog() {
  const { articles } = useLoaderData() as LoaderDataBlog;

  return (
    <Layout variant="medium">
      <header>
        <h1>Blog</h1>
        <h2>All available articles</h2>
        <p>
          Discussing around UI, UX, styling, CSS, design system, and more
          beyond.
        </p>
      </header>

      <div>
        <BlogArticles articles={articles} />
      </div>
    </Layout>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}
