import { RemixLink } from "~/components";
import { getCompleteDate, stringifyJSON } from "~/utils";

import type { Article } from "~/types";

interface BlogArticleProps {
  article: Article;
}

/**
 * The linked snippet of the blog article
 */
export const BlogArticleLink = ({ article }: BlogArticleProps) => {
  const to = `/blog/${article.slug}`;

  return (
    <RemixLink to={to} className="card">
      <div className="stack-h gap-5">
        <div>
          <img
            className="rounded-base"
            src={article.coverImage?.url}
            alt={article.title}
          />
        </div>
        <div className="stack-v w-full gap-2">
          <h3 className="m-0">{article.title}</h3>
          <p className="text-dim">{article.excerpt}</p>
          <time className="text-dim" dateTime={article.date}>
            {getCompleteDate(article.date)}
          </time>
        </div>
      </div>
    </RemixLink>
  );
};

/**
 * The whole blog article with content
 */
export const BlogArticle = ({ article }: BlogArticleProps) => {
  return (
    <article className="prose-config">
      <h1>{article.title}</h1>
      <pre>{stringifyJSON(article)}</pre>
    </article>
  );
};
