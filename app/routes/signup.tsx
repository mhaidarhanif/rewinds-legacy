import { Layout } from "~/layouts";

import type { SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/signup`, priority: 0.8 }];
  },
};

export default function SignUp() {
  return (
    <Layout>
      <h1>Create your new account</h1>
    </Layout>
  );
}
