import { gql } from "~/libs";

export const AllArticles = gql`
  query AllArticles {
    articles {
      id
      slug
      title
      date
      excerpt
      coverImage {
        id
        url(
          transformation: {
            image: { resize: { width: 500, height: 300, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
    }
  }
`;

export const OneArticleBySlug = gql`
  query OneArticleBySlug($slug: String!) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      date
      excerpt
      content {
        markdown
        html
      }
      coverImage {
        url(
          transformation: {
            image: { resize: { width: 1200, height: 600, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
    }
  }
`;
