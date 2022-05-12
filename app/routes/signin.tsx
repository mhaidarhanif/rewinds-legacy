import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/signin`, priority: 0.8 }];
  },
};

export default function SignInRoute() {
  return (
    <Layout>
      <h1>Welcome back! Let's sign in</h1>
    </Layout>
  );
}
