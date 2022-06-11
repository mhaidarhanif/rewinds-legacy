import { json } from "@remix-run/node";

import { BlogArticle } from "~/contents";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { markdocParse, markdocTransform } from "~/libs";
import { getArticleBySlug } from "~/models";
import { createMetaData } from "~/utils";

import type {
  Article,
  LoaderDataBlogArticle,
  LoaderFunction,
  MetaFunction,
  SEOHandle,
} from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return null;
  },
};

/**
 * Generate metadata when article is not found or found.
 */
export const meta: MetaFunction = ({ data }) => {
  const { article }: { article: Article } = data;

  if (!article) {
    return createMetaData({
      title: "No article found — Blog",
      description:
        "Sorry, no blog article found. Please check the URL again. Thanks!",
    });
  }

  return createMetaData({
    route: article?.slug,
    title: `${article?.title} — Blog`,
    description: article?.excerpt ?? "No description",
  });
};

/**
 * Response one article by slug data from GraphCMS.
 */
export const loader: LoaderFunction = async ({ params }) => {
  const article = await getArticleBySlug(params.articleSlug as string);

  if (!article) {
    throw json("Not Found", { status: 404 });
  }

  const content = markdocTransform(markdocParse(article.content.markdown));

  return json<LoaderDataBlogArticle>({ params, article, content });
};

/**
 * Render one article.
 */
export default function BlogArticleSlug() {
  const { article, content } = useLoaderData() as LoaderDataBlogArticle;

  return (
    <Layout variant="medium">
      <BlogArticle article={article} content={content} />
    </Layout>
  );
}
