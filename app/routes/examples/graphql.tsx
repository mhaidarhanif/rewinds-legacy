import { json } from '@remix-run/node';
import { gql } from 'graphql-request';

import { H1, Pre, RadixScrollArea } from '~/components';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';
import { graphqlClient } from '~/libs';
import { sleep } from '~/utils';

import type { LoaderFunction } from '~/types';

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

  await sleep(1);
  const data = await graphqlClient.request(query);

  return json(data);
};

export default function ExampleGraphQLRoute() {
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