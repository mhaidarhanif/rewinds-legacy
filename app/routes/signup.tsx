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
    title: `Create your new Rewinds Account`,
    description: `Sign up to have a Rewinds account`,
  });
};

export default function SignUp() {
  return (
    <Layout variant="common">
      <Header className="header-center">
        <H1>Create a new account</H1>
        <P>The ultimate account for Rewinds</P>
      </Header>
    </Layout>
  );
}
