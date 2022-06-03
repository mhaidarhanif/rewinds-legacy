import { json } from "@remix-run/node";

import { BlogArticles } from "~/contents";
import { AllArticles } from "~/graphql";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { graphcmsClient } from "~/libs";
import { createMetaData } from "~/utils";

import type {
  SEOHandle,
  MetaFunction,
  LoaderFunction,
  LoaderDataBlog,
} from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/blog`, priority: 0.8 }];
  },
};

export const loader: LoaderFunction = async () => {
  const response = await graphcmsClient.query(AllArticles).toPromise();

  return json<LoaderDataBlog>({
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
  const { articles } = useLoaderData<LoaderDataBlog>();

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
        <BlogArticles articles={articles} />
      </div>
    </Layout>
  );
}
