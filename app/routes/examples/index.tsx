import { json } from "@remix-run/node";

import { RemixLink } from "~/components";
import { configNavigationExamples } from "~/configs";
import { dataUtilities } from "~/data";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";

import type { LoaderDataExamples, LoaderFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/examples`, priority: 0.9 }];
  },
};

export const loader: LoaderFunction = async () => {
  return json<LoaderDataExamples>({
    examples: configNavigationExamples,
    utilities: dataUtilities,
  });
};

export default function Examples() {
  const { examples, utilities } = useLoaderData<LoaderDataExamples>();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Examples</h1>

        <h2>Example Components</h2>
        <ul>
          {examples.map((item) => {
            return (
              <li key={item.text}>
                <RemixLink to={item.to}>{item.text}</RemixLink>
              </li>
            );
          })}
        </ul>

        <h2>Example Utilities</h2>
        <ul>
          {utilities.map((item) => {
            return <li key={item.text}>{item.text}</li>;
          })}
        </ul>
      </article>
    </Layout>
  );
}
