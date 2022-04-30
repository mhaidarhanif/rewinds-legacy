import { Layout } from '~/layouts';

export default function SubscribedRoute() {
  return (
    <Layout className="prose dark:prose-invert">
      <h1 className="font-comic text-primary-500">Subscription confirmed!</h1>
      <p>Your email is confirmed and on the list. Expect some updates soon.</p>
    </Layout>
  );
}
