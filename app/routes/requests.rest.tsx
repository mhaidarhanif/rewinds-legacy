import { json } from '@remix-run/node';

import { H1, Pre, RadixScrollArea } from '~/components';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';
import { sleep } from '~/utils';

import type { LoaderFunction } from '~/types';

export const loader: LoaderFunction = async () => {
  const endpoint = process.env.REST_ENDPOINT as string;

  await sleep(1);
  const response = await fetch(endpoint);
  const data = await response.json();

  return json(data);
};

export default function RequestsRESTRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <H1>Data from REST API</H1>
      <RadixScrollArea>
        <Pre>{data}</Pre>
      </RadixScrollArea>
    </Layout>
  );
}
