import { H1 } from '~/components';
import { Layout } from '~/layouts';

import type { SEOHandle } from '~/types';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/blog`, priority: 0.8 }];
  },
};

export default function BlogRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <H1>Blog Articles</H1>
      </article>
    </Layout>
  );
}
