import { gql } from 'graphql-request';
import { json, useLoaderData } from 'remix';

import { H1, Pre, RadixScrollArea } from '~/components';
import { Layout } from '~/layouts';
import { graphqlClient } from '~/libs';
import { sleep } from '~/utils';

import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  const query = gql`
    query Request {
      method
      url
      headers {
        key
        value
      }
    }
  `;

  await sleep(100);
  const data = await graphqlClient.request(query);

  return json(data);
};

export default function RequestsGraphQLRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <H1>Data from GraphQL</H1>
      <RadixScrollArea>
        <Pre>{data}</Pre>
      </RadixScrollArea>
    </Layout>
  );
}
