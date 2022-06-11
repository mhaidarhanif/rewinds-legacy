import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { SEOHandle, MetaFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Continue with account`,
    description: `Sign in to continue to Rewinds.`,
  });
};

export default function SignUp() {
  return (
    <Layout>
      <header className="header-center">
        <h1>Welcome back!</h1>
        <p>Let's sign in to your account</p>
      </header>
    </Layout>
  );
}
