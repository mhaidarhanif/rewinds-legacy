import { json, useLoaderData } from 'remix';

import { H1, Pre, RadixScrollArea } from '~/components';
import { Layout } from '~/layouts';
import { sleep } from '~/utils';

import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  const url = 'https://echo.hoppscotch.io';

  await sleep(100);
  const response = await fetch(url);
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
