import { stringifyJSON } from "~/utils";

import type { Articles } from "~/types";

interface BlogArticlesProps {
  articles: Articles;
}

export const BlogArticles = ({ articles }: BlogArticlesProps) => {
  return (
    <div className="prose-config">
      <pre>{stringifyJSON(articles)}</pre>
    </div>
  );
};
