import { json } from '@remix-run/node';

import { Pre, RadixScrollArea } from '~/components';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';
import { sleep } from '~/utils';

import type { LoaderFunction } from '~/types';

export const loader: LoaderFunction = async () => {
  const endpoint = process.env.REST_ENDPOINT as string;

  await sleep(1);
  const response = await fetch(endpoint);
  const data = await response.json();

  return json({
    endpoint,
    ...data,
  });
};

export default function ExampleRESTRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: REST API</h1>
        <p>
          Fetch data from REST API with <code>axios</code>.
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
