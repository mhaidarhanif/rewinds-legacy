import { createClient } from '@urql/core';

export const urqlClient = createClient({
  url: process.env.GRAPHQL_ENDPOINT as string,
});

export const graphcmsClient = createClient({
  url: process.env.GRAPHCMS_ENDPOINT as string,
});
