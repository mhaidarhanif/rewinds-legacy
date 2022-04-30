import { useActionData, useTransition } from 'remix';

import { configMetaDefault } from '~/configs';
import { SubscribeForm } from '~/contents';
import { actionSubscribe } from '~/features';
import { Layout } from '~/layouts';

import type { ActionFunction } from 'remix';

export const action: ActionFunction = actionSubscribe;

export default function SubscribeRoute() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Layout className="prose dark:prose-invert">
      <h1>Subscribe</h1>
      <p>
        Subscribe to updates on <b>Rewinds</b> from{' '}
        <b>{configMetaDefault.newsletterName}</b>.
      </p>

      <SubscribeForm transition={transition} actionData={actionData} />
    </Layout>
  );
}
