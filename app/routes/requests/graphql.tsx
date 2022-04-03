import { request, gql } from 'graphql-request';
import { json, LoaderFunction, useLoaderData } from 'remix';

import { H1, Pre, RadixScrollArea } from '~/components';
import { sleep } from '~/utils';

export const loader: LoaderFunction = async () => {
  const url = 'https://echo.hoppscotch.io/graphql';

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

  await sleep(500);
  const data = await request(url, query);

  return json(data);
};

export default function RequestsGraphQLRoute() {
  const data = useLoaderData();

  return (
    <div>
      <H1>Data from GraphQL</H1>
      <RadixScrollArea>
        <Pre data={data} />
      </RadixScrollArea>
    </div>
  );
}
