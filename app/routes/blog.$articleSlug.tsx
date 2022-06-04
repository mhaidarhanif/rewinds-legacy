import { json, useLoaderData } from "remix";

import { BlogArticle } from "~/contents";
import { OneArticleBySlug } from "~/graphql";
import { Layout } from "~/layouts";
import { graphcmsClient, markdocParse, markdocTransform } from "~/libs";
import { createMetaData } from "~/utils";

import type {
  Article,
  LoaderDataBlogArticle,
  LoaderFunction,
  MetaFunction,
  SEOHandle,
} from "~/types";

/**
 * Generate sitemap for all articles, not just one article by slug.
 */
export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return null;
    // const response = await graphcmsClient.query(AllArticles).toPromise();
    // const { articles }: { articles: Articles } = response.data;

    // return articles.map((article) => {
    //   return { route: `/blog/${article.slug}`, priority: 0.8 };
    // });
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
  const { articleSlug } = params;

  const response = await graphcmsClient
    .query(OneArticleBySlug, { slug: articleSlug })
    .toPromise();

  const { article } = response.data;

  if (!article) {
    throw json("Not Found", { status: 404 });
  }

  const content = markdocTransform(markdocParse(article.content.markdown));

  return json<LoaderDataBlogArticle>({
    slug: articleSlug as string,
    article: response.data.article,
    content,
  });
};

/**
 * Render one article.
 */
export default function BlogArticleSlug() {
  const { article, content } = useLoaderData<LoaderDataBlogArticle>();

  return (
    <Layout variant="medium">
      <BlogArticle article={article} content={content} />
    </Layout>
  );
}
