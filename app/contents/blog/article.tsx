import {
  Breadcrumb,
  GraphCMSRichText,
  LazyLoad,
  MarkdocRichText,
  RemixLink,
  VechaiAvatar,
} from "~/components";
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
      className="bg-focusable rounded-base md:max-w-full md:p-2"
    >
      <article className="stack-v md:stack-h gap-5 md:grid md:max-w-full md:grid-cols-2">
        {article?.coverImage?.url && (
          <LazyLoad
            once
            height={270}
            placeholder={
              <div className="aspect-video w-full rounded-base bg-neutral-800" />
            }
          >
            <img
              className="aspect-video w-full rounded-base object-cover"
              src={article.coverImage.url}
              alt={article.title}
            />
          </LazyLoad>
        )}

        <div className="stack-v gap-5">
          <section className="stack-v w-full max-w-lg gap-2">
            <h2 className="m-0">{article.title}</h2>
            <p className="text-lg">{article.excerpt}</p>
            <time className="text-dim" dateTime={article.date}>
              {getCompleteDateUS(article.date)}
            </time>
          </section>

          {article?.authors && (
            <section className="stack-h w-full flex-wrap gap-3">
              {article.authors.map((author) => {
                return (
                  <div key={author.id} className="stack-h-center gap-2">
                    <VechaiAvatar
                      size="sm"
                      name={author.name}
                      src={author.picture?.url}
                    />
                    <span className="text-sm">{author.name}</span>
                  </div>
                );
              })}
            </section>
          )}
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
  // Prioritize Markdoc render over GraphCMS render
  const hasContent = content;
  const hasContentRaw = !content && article?.content?.raw;

  return (
    <article>
      <header className="stack-v items-center">
        <div className="layout-content small w-full">
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
              <div className="stack-h-center gap-3">
                <time className="text-dim" dateTime={article.date}>
                  {getCompleteDateUS(article.date)}
                </time>
                <time
                  className="text-dim hidden text-xs"
                  dateTime={article.date}
                >
                  Published {getRelativeTime(article.date)}
                </time>
              </div>
            )}

            {article?.title ? (
              <h1>{article.title}</h1>
            ) : (
              <h1>Article Not Found</h1>
            )}

            <div>
              {article?.excerpt && <p className="text-xl">{article.excerpt}</p>}
              {!article && (
                <p>
                  Sorry, article with the slug <code>`{slug}`</code> is not
                  found.
                </p>
              )}
            </div>

            {article?.authors && (
              <div className="stack-h mt-10 w-full flex-wrap gap-5">
                {article.authors.map((author) => {
                  return (
                    <div key={author.id} className="stack-h-center gap-3">
                      <VechaiAvatar
                        size="xl"
                        name={author.name}
                        src={author.picture?.url}
                      />
                      <span>{author.name}</span>
                    </div>
                  );
                })}
              </div>
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
            className="w-full rounded-base"
            src={article.coverImage.url}
            alt={article.title}
          />
        </LazyLoad>
      )}

      <section className="stack-v mt-10 items-center">
        {hasContent && (
          <div className="prose-config article-content layout-content small">
            <MarkdocRichText content={content} />
          </div>
        )}

        {hasContentRaw && (
          <div className="prose-config article-content layout-content small">
            <GraphCMSRichText content={article?.content?.raw} />
          </div>
        )}
      </section>
    </article>
  );
};
