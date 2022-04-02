import { json, LoaderFunction, useLoaderData } from 'remix';

import { sleep } from '~/utils';

export const loader: LoaderFunction = async () => {
  await sleep(3000);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = response.json();

  return json(data);
};

export default function RequestsGraphQLRoute() {
  const data = useLoaderData();

  return (
    <article className="prose dark:prose-invert">
      <h1>Data from GraphQL</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </article>
  );
}
