import { Breadcrumb, LazyLoad, RemixLink } from "~/components";
import { markdocRenderReact } from "~/libs";
import { getCompleteDateUS, getRelativeTime } from "~/utils";

import type { Article, RenderableTreeNode } from "~/types";

/**
 * The linked card view of the blog article
 *
 * Note: Use bg-neutral as bg-primary/secondary might be a bit too slow
 * So the placeholder doesn't flash
 */

interface BlogArticleLinkProps {
  article: Article;
}

export const BlogArticleLink = ({ article }: BlogArticleLinkProps) => {
  return (
    <RemixLink
      prefetch="intent"
      to={`/blog/${article.slug}`}
      className="bg-focusable"
    >
      <article className="stack-v sm:stack-h justify-between gap-5">
        {article?.coverImage?.url && (
          <LazyLoad
            once
            height={270}
            placeholder={
              <div className="aspect-video w-full rounded-base bg-neutral-800" />
            }
          >
            <img
              className="aspect-video w-full rounded-base"
              src={article.coverImage.url}
              alt={article.title}
            />
          </LazyLoad>
        )}

        <div className="stack-v w-full max-w-lg gap-2">
          <h2 className="m-0">{article.title}</h2>
          <p className="text-dim">{article.excerpt}</p>
          <time className="text-dim" dateTime={article.date}>
            {getCompleteDateUS(article.date)}
          </time>
          <time className="text-dim text-xs" dateTime={article.date}>
            Published {getRelativeTime(article.date)}
          </time>
        </div>
      </article>
    </RemixLink>
  );
};

/**
 * The whole blog article with content
 */

interface BlogArticleProps {
  slug?: string;
  article?: Article;
  content?: RenderableTreeNode;
}

export const BlogArticle = ({ slug, article, content }: BlogArticleProps) => {
  return (
    <div>
      <header className="stack-v items-center">
        <div className="w-full max-w-screen-sm">
          <Breadcrumb id="breadcrumb" className="stack-v container-high gap-4">
            <Breadcrumb.Item>
              <RemixLink prefetch="intent" to="/blog">
                Blog
              </RemixLink>
            </Breadcrumb.Item>
            {slug && (
              <Breadcrumb.Item currentPage>
                <RemixLink prefetch="intent" to={`/blog/${slug}`}>
                  {article?.title || slug}
                </RemixLink>
              </Breadcrumb.Item>
            )}
          </Breadcrumb>

          <div className="mt-10">
            {article?.date && (
              <time className="text-dim" dateTime={article.date}>
                {getCompleteDateUS(article.date)}
              </time>
            )}
            {article?.title ? (
              <h1>{article.title}</h1>
            ) : (
              <h1>Article Not Found</h1>
            )}
            {article?.excerpt && <p className="text-xl">{article.excerpt}</p>}
            {!article && (
              <p>
                Sorry, article with the slug <code>`{slug}`</code> is not found.
              </p>
            )}
          </div>
        </div>
      </header>

      {article?.coverImage?.url && (
        <LazyLoad
          once
          height={580}
          placeholder={
            <div className="aspect-video w-full rounded-base bg-neutral-800" />
          }
        >
          <img
            className="aspect-video w-full rounded-base"
            src={article.coverImage.url}
            alt={article.title}
          />
        </LazyLoad>
      )}

      {content && (
        <div className="stack-v mt-10 items-center">
          <div className="prose-config max-w-screen-sm">
            {markdocRenderReact(content)}
          </div>
        </div>
      )}
    </div>
  );
};
