import { json, LoaderFunction, useLoaderData } from 'remix';

import { H1, Pre, RadixScrollArea } from '~/components';
import { sleep } from '~/utils';

export const loader: LoaderFunction = async () => {
  const url = 'https://echo.hoppscotch.io';

  await sleep(500);
  const response = await fetch(url);
  const data = await response.json();

  return json(data);
};

export default function RequestsRestRoute() {
  const data = useLoaderData();

  return (
    <div>
      <H1>Data from REST API</H1>
      <RadixScrollArea>
        <Pre data={data} />
      </RadixScrollArea>
    </div>
  );
}
