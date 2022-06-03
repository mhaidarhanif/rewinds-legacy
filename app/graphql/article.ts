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
