import { Pre, RadixScrollArea } from "~/components";
import { loaderSession } from "~/features";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";

import type { LoaderFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const loader: LoaderFunction = loaderSession;

export default function DebugRoute() {
  const data = useLoaderData();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Debug</h1>
        <p>The data shown here is public, not secret.</p>
      </article>

      <RadixScrollArea>
        <Pre>{data}</Pre>
      </RadixScrollArea>
    </Layout>
  );
}
