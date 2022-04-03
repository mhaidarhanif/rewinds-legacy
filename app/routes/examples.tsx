import { json, LoaderFunction, useLoaderData } from 'remix';

import { dataExampleComponents, dataExampleUtilities } from '~/data';
import { ComponentItem, UtilityItem } from '~/types';

type LoaderData = {
  exampleComponents: ComponentItem[];
  exampleUtilities: UtilityItem[];
};

export const loader: LoaderFunction = async () => {
  return json({
    exampleComponents: dataExampleComponents,
    exampleUtilities: dataExampleUtilities,
  });
};

export default function ExamplesRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="prose dark:prose-invert">
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
    </div>
  );
}
