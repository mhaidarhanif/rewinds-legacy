import { Anchor, Header } from "~/components";
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
    description: `Get some updates from Rewinds via email.`,
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
        <h1>Subscribe</h1>
        <h2>
          <Anchor href="https://twitter.com/mhaidarhanif">
            Follow the updates on <b>Rewinds</b>
          </Anchor>
        </h2>
      </Header>

      <div className="stack-v items-center">
        <SubscribeForm transition={transition} actionData={actionData} />
      </div>
    </Layout>
  );
}
