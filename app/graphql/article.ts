import { gql } from "~/libs";

export const FragmentArticleData = gql`
  fragment ArticleData on Article {
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
          validateOptions: true
        }
      )
    }
    authors {
      id
      name
      picture {
        url(
          transformation: {
            image: { resize: { width: 50, height: 50, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
    }
  }
`;

export const QueryAllArticles = gql`
  query AllArticles {
    articles(orderBy: date_DESC) {
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
            validateOptions: true
          }
        )
      }
      authors {
        id
        name
        picture {
          url(
            transformation: {
              image: { resize: { width: 50, height: 50, fit: clip } }
              document: { output: { format: jpg } }
              validateOptions: true
            }
          )
        }
      }
    }
  }
`;

export const QueryOneArticleBySlug = gql`
  query OneArticleBySlug($slug: String!) {
    article(where: { slug: $slug }) {
      id
      slug
      title
      date
      excerpt
      content {
        markdown
        raw
      }
      markdown
      coverImage {
        url(
          transformation: {
            image: { resize: { width: 1200, height: 600, fit: clip } }
            validateOptions: true
          }
        )
      }
      authors {
        id
        name
        picture {
          url(
            transformation: {
              image: { resize: { width: 100, height: 100, fit: clip } }
              document: { output: { format: jpg } }
              validateOptions: true
            }
          )
        }
      }
    }
  }
`;
