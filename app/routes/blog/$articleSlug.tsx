import { json } from "@remix-run/node";

import { BlogArticle } from "~/contents";
import { useCatch, useLoaderData, useParams } from "~/hooks";
import { invariant, markdocParse, markdocTransform } from "~/libs";
import { getArticleBySlug } from "~/models";
import { createMetaData, stringifyJSON } from "~/utils";

import type {
  Article,
  LoaderDataBlogArticle,
  LoaderFunction,
  MetaFunction,
  SEOHandle,
} from "~/types";

/**
 * Handled in routes/blog, generate once for all articles
 * Because we don't want to perform for each $articleSlug
 */
export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return null;
  },
};

/**
 * Generate metadata when article is not found or found.
 */
export const meta: MetaFunction = (args) => {
  const { data } = args;

  if (!data) {
    return createMetaData({
      title: "No article found — Blog",
      description:
        "Sorry, no blog article found. Please check the URL again. Thanks!",
    });
  }

  const article: Article = data.article || null;

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
  invariant(articleSlug, "Article slug is required");

  const article = await getArticleBySlug(articleSlug);

  if (!article) {
    throw json("Not Found", { status: 404 });
  }

  const content = markdocTransform(markdocParse(article?.content?.markdown));

  return json<LoaderDataBlogArticle>({ params, article, content });
};

/**
 * Render one article by slug
 * No need to use the Layout as it's already defined in the routes/blog.tsx
 */

export default function BlogArticleSlug() {
  const { article, content } = useLoaderData() as LoaderDataBlogArticle;

  return (
    <BlogArticle slug={article.slug} article={article} content={content} />
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();

  if (caught.status === 404) {
    return <BlogArticle slug={params.articleSlug} />;
  }

  return (
    <div>
      <header>
        <h1>Caught an unknown error in Article</h1>
      </header>
      <p>Status: {caught.status}</p>
      <pre>{stringifyJSON(caught.data)}</pre>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <header>
        <h1>Error in Article</h1>
      </header>
      <pre>{error.message}</pre>
    </div>
  );
}
