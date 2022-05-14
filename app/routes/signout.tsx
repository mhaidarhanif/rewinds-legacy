import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export default function SignOut() {
  return (
    <Layout>
      <h1>Sure to sign out?</h1>
    </Layout>
  );
}
