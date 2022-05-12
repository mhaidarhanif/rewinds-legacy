import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.GRAPHQL_ENDPOINT as string,
);
