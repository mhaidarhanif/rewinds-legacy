import { Breadcrumb, RemixLink } from "~/components";
import { getCompleteDate, stringifyJSON } from "~/utils";

import type { Article } from "~/types";

interface BlogArticleProps {
  article: Article;
}

/**
 * The linked snippet of the blog article
 */
export const BlogArticleLink = ({ article }: BlogArticleProps) => {
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
export const BlogArticle = ({ article }: BlogArticleProps) => {
  const toArticleSlug = `/blog/${article.slug}`;

  return (
    <div className="w-full">
      <div className="stack-v gap-4">
        <Breadcrumb>
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
      </div>

      <article className="prose-config">
        <time className="text-dim" dateTime={article.date}>
          {getCompleteDate(article.date)}
        </time>
        <h1>{article.title}</h1>
        {article?.excerpt && <p>{article.excerpt}</p>}
        <pre>{stringifyJSON(article)}</pre>
      </article>
    </div>
  );
};
