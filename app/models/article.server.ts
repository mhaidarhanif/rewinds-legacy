import { AllArticles, OneArticleBySlug } from "~/graphql";
import { graphcmsClient } from "~/libs";

export const getArticles = async () => {
  const response = await graphcmsClient.query(AllArticles).toPromise();
  const { articles } = response.data;
  return articles;
};

export const getArticleBySlug = async (slug: string) => {
  const response = await graphcmsClient
    .query(OneArticleBySlug, { slug })
    .toPromise();
  const { article } = response.data;
  return article;
};
