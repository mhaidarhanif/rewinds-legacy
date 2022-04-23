import { Layout } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export default function SignOutRoute() {
  return (
    <Layout>
      <h1>Sure to sign out?</h1>
    </Layout>
  );
}
