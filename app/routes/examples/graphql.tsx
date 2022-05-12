import { json } from '@remix-run/node';

import { Pre, RadixScrollArea } from '~/components';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';
import { gql, graphqlClient } from '~/libs';
import { sleep } from '~/utils';

import type { LoaderFunction } from '~/types';

export const loader: LoaderFunction = async () => {
  const endpoint = process.env.GRAPHQL_ENDPOINT as string;

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

  return json({
    endpoint,
    ...data,
  });
};

export default function ExampleGraphQLRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: GraphQL</h1>
        <p>
          Query data from GraphQL with <code>graphql-request</code>.
        </p>
      </article>

      <article className="example">
        <Pre>{data.endpoint}</Pre>
        <RadixScrollArea>
          <Pre>{data}</Pre>
        </RadixScrollArea>
      </article>
    </Layout>
  );
}
