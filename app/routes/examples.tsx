import { json } from '@remix-run/node';


import { dataExampleComponents, dataExampleUtilities } from '~/data';
import {useLoaderData} from '~/hooks'
import { Layout } from '~/layouts';

import type { LoaderFunction, ComponentItem, UtilityItem } from '~/types';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/examples`, priority: 0.9 }];
  },
};

export const loader: LoaderFunction = async () => {
  return json({
    exampleComponents: dataExampleComponents,
    exampleUtilities: dataExampleUtilities,
  });
};

type LoaderData = {
  exampleComponents: ComponentItem[];
  exampleUtilities: UtilityItem[];
};

export default function ExamplesRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <Layout className="prose dark:prose-invert">
      <h1>Examples</h1>

      <h2>Example components</h2>
      <ul>
        {data.exampleComponents.map((availableComponent) => {
          return (
            <li key={availableComponent.name}>{availableComponent.name}</li>
          );
        })}
      </ul>

      <h2>Example utilities</h2>
      <ul>
        {data.exampleUtilities.map((availableUtility) => {
          return <li key={availableUtility.name}>{availableUtility.name}</li>;
        })}
      </ul>
    </Layout>
  );
}
