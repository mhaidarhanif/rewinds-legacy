import { json } from '@remix-run/node';

import { dataExampleComponents, dataExampleUtilities } from '~/data';
import { useLoaderData } from '~/hooks';
import { Layout } from '~/layouts';

import type {
  ComponentItem,
  LoaderFunction,
  SEOHandle,
  UtilityItem,
} from '~/types';

type LoaderDataExamples = {
  exampleComponents: ComponentItem[];
  exampleUtilities: UtilityItem[];
};

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/examples`, priority: 0.9 }];
  },
};

export const loader: LoaderFunction = async () => {
  return json<LoaderDataExamples>({
    exampleComponents: dataExampleComponents,
    exampleUtilities: dataExampleUtilities,
  });
};

export default function ExamplesRoute() {
  const data = useLoaderData<LoaderDataExamples>();

  return (
    <Layout>
      <article className="prose-config">
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
      </article>
    </Layout>
  );
}
