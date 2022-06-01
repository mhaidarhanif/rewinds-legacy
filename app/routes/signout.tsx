import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { MetaFunction, SEOHandle } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Sign out`,
    description: `Sign out from Rewinds account.`,
  });
};

export default function SignOut() {
  return (
    <Layout>
      <header className="header-center">
        <h1>Sure to sign out?</h1>
      </header>
    </Layout>
  );
}
