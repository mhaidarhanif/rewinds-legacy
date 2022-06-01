import { Anchor, H1, H2, Header } from "~/components";
import { SubscribeForm } from "~/contents";
import { actionSubscribe, loaderSubscribe } from "~/features";
import { useActionData, useTransition } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type {
  LoaderFunction,
  ActionFunction,
  MetaFunction,
  SEOHandle,
} from "~/types";

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/subscribe`, priority: 0.9 }];
  },
};

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Subscribe`,
    description: `Get to more updates from Rewinds via email.`,
  });
};

export const loader: LoaderFunction = loaderSubscribe;

export const action: ActionFunction = actionSubscribe;

// EDITME
export default function Subscribe() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Layout variant="wide">
      <Header className="header-center">
        <H1>Subscribe</H1>
        <H2>
          <Anchor href="https://twitter.com/mhaidarhanif">
            Follow the updates on <b>Rewinds</b>
          </Anchor>
        </H2>
      </Header>

      <div className="stack-v items-center">
        <SubscribeForm transition={transition} actionData={actionData} />
      </div>
    </Layout>
  );
}
