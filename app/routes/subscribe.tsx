import { configMeta } from "~/configs";
import { SubscribeForm } from "~/contents";
import { actionSubscribe, loaderSubscribe } from "~/features";
import { useActionData, useTransition } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { LoaderFunction, ActionFunction, MetaFunction } from "~/types";

export const meta: MetaFunction = () => {
  return createMetaData({
    title: `Subscribe`,
    description: `Get to more updates from Rewinds via email.`,
  });
};

export const loader: LoaderFunction = loaderSubscribe;

export const action: ActionFunction = actionSubscribe;

export default function Subscribe() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Subscribe</h1>
        <p>
          Subscribe to updates on <b>Rewinds</b> from{" "}
          <b>{configMeta.mailingListName}</b>.
        </p>
      </article>

      <SubscribeForm transition={transition} actionData={actionData} />
    </Layout>
  );
}
