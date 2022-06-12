import { gql } from "~/libs";

export const OnePageBySlug = gql`
  query OnePageBySlug($slug: String!) {
    page(locales: [en, id], where: { slug: $slug }) {
      id
      slug
      title
      content {
        markdown
      }
    }
  }
`;
