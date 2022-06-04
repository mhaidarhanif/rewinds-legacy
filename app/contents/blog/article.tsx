import { Breadcrumb, RemixLink } from "~/components";
import { markdocRenderReact } from "~/libs";
import { getCompleteDate } from "~/utils";

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
          <h3 className="m-0">{article.title}</h3>
          <p className="text-dim">{article.excerpt}</p>
          <time className="text-dim" dateTime={article.date}>
            {getCompleteDate(article.date)}
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
      <Breadcrumb id="breadcrumb" className="stack-v gap-4">
        <Breadcrumb.Item>
          <RemixLink to="/blog" className="link">
            Blog
          </RemixLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item currentPage>
          <RemixLink to={toArticleSlug} className="link">
            {article.title}
          </RemixLink>
        </Breadcrumb.Item>
      </Breadcrumb>

      <header className="header">
        <time className="text-dim" dateTime={article.date}>
          {getCompleteDate(article.date)}
        </time>
        <h1>{article.title}</h1>
        {article?.excerpt && <p className="text-2xl">{article.excerpt}</p>}
      </header>

      <div className="prose-config">
        <figure className="bg-secondary rounded-base p-2">
          <img
            className="bg-secondary  w-full rounded-base"
            src={article.coverImage?.url}
            alt={article.title}
          />
          <figcaption className="text-center">{article.title}</figcaption>
        </figure>

        {markdocRenderReact(content)}
      </div>
    </>
  );
};
