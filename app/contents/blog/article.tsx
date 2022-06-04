import { Breadcrumb, RemixLink } from "~/components";
import { markdocRenderReact } from "~/libs";
import { getCompleteDateUS } from "~/utils";

import type { Article } from "~/types";

/**
 * The linked snippet of the blog article
 */
export const BlogArticleLink = ({ article }: { article: Article }) => {
  const toArticleSlug = `/blog/${article.slug}`;

  return (
    <RemixLink to={toArticleSlug} className="card">
      <article className="stack-v sm:stack-h gap-5">
        <div>
          <img
            className="w-full rounded-base"
            src={article.coverImage?.url}
            alt={article.title}
          />
        </div>
        <div className="stack-v w-full max-w-lg gap-2">
          <h2 className="m-0">{article.title}</h2>
          <p className="text-dim">{article.excerpt}</p>
          <time className="text-dim" dateTime={article.date}>
            {getCompleteDateUS(article.date)}
          </time>
        </div>
      </article>
    </RemixLink>
  );
};

/**
 * The whole blog article with content
 */
export const BlogArticle = ({
  article,
  content,
}: {
  article: Article;
  content: any;
}) => {
  const toArticleSlug = `/blog/${article.slug}`;

  return (
    <>
      <header className="stack-v items-center">
        <div className="max-w-screen-sm">
          <Breadcrumb id="breadcrumb" className="stack-v container-high gap-4">
            <Breadcrumb.Item>
              <RemixLink to="/blog">Blog</RemixLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item currentPage>
              <RemixLink to={toArticleSlug}>{article.title}</RemixLink>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-10">
            <time className="text-dim" dateTime={article.date}>
              {getCompleteDateUS(article.date)}
            </time>
            <h1>{article.title}</h1>
            {article?.excerpt && <p className="text-xl">{article.excerpt}</p>}
          </div>
        </div>
      </header>

      <figure>
        <img
          className="bg-secondary w-full rounded-base"
          src={article.coverImage?.url}
          alt={article.title}
        />
      </figure>

      <div className="stack-v mt-10 items-center">
        <div className="prose-config max-w-screen-sm">
          {markdocRenderReact(content)}
        </div>
      </div>
    </>
  );
};
