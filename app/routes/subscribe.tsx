import { H1, P } from '~/components';
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
      <H1>Subscribe</H1>
      <P>
        Subscribe to updates on <b>Rewinds</b> from{' '}
        <b>{configMeta.newsletterName}</b>.
      </P>

      <SubscribeForm transition={transition} actionData={actionData} />
    </Layout>
  );
}
