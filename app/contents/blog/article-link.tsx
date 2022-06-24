import { LazyLoad, RemixLink, VechaiAvatar } from "~/components";
import { getCompleteDateUS } from "~/utils";

import type { Article } from "~/types";

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
              <div className="aspect-video w-full rounded-base bg-neutral-500" />
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
            <p>{article.excerpt}</p>
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
