import { H1, Header, P } from "~/components";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { SEOHandle, MetaFunction } from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/signup`, priority: 0.8 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Continue with account`,
    description: `Sign in to continue to Rewinds`,
  });
};

export default function SignUp() {
  return (
    <Layout variant="common">
      <Header className="header-center">
        <H1>Welcome back!</H1>
        <P>Let's sign in to your account</P>
      </Header>
    </Layout>
  );
}
