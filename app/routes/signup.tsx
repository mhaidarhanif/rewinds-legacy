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
    title: `Create your new Rewinds account`,
    description: `Sign up to have a new Rewinds account.`,
  });
};

export default function SignUp() {
  return (
    <Layout>
      <header className="header-center">
        <h1>Create a new account</h1>
        <p>The ultimate account for Rewinds</p>
      </header>
    </Layout>
  );
}
