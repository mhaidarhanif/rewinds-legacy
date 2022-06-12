import { QueryAllArticles, QueryOneArticleBySlug } from "~/graphql";
import { graphcmsClient } from "~/libs";

export const getArticles = async () => {
  const response = await graphcmsClient.query(QueryAllArticles).toPromise();
  return response.data.articles;
};

export const getArticleBySlug = async (slug: string) => {
  const response = await graphcmsClient
    .query(QueryOneArticleBySlug, { slug })
    .toPromise();
  return response.data.article;
};
