import { configMeta } from '~/configs';
import { SubscribeForm } from '~/contents';
import { actionSubscribe, loaderSubscribe } from '~/features';
import { useActionData, useTransition } from '~/hooks';
import { Layout } from '~/layouts';

import type { LoaderFunction, ActionFunction } from '~/types';

export const loader: LoaderFunction = loaderSubscribe;

export const action: ActionFunction = actionSubscribe;

export default function SubscribeRoute() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Layout>
      <article className="prose-config">
        <h1>Subscribe</h1>
        <p>
          Subscribe to updates on <b>Rewinds</b> from{' '}
          <b>{configMeta.newsletterName}</b>.
        </p>
      </article>

      <SubscribeForm transition={transition} actionData={actionData} />
    </Layout>
  );
}
