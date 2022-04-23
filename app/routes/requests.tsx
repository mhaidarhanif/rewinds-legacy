import { RemixLink } from '~/components';
import { Layout } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/requests`, priority: 0.8 }];
  },
};

export default function RequestsRoute() {
  return (
    <Layout className="prose dark:prose-invert">
      <h1>Example requests</h1>
      <ul>
        <li>
          <RemixLink to="rest">REST</RemixLink>
        </li>
        <li>
          <RemixLink to="graphql">GraphQL</RemixLink>
        </li>
      </ul>
    </Layout>
  );
}
