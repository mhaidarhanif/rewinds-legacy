import { gql } from "~/libs";

export const QueryAllAuthors = gql`
  query AllAuthors {
    authors(orderBy: name_ASC) {
      id
      name
      bio
      picture {
        url(
          transformation: {
            image: { resize: { width: 250, height: 250, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
    }
  }
`;
