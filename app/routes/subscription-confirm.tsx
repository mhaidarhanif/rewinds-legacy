import { Layout } from '~/layouts';

export default function SubscriptionConfirmRoute() {
  return (
    <Layout className="prose dark:prose-invert">
      <h1 className="font-comic text-primary-500">
        Please confirm your subscription
      </h1>
      <p>
        We just received your name and email. Please check your inbox and click
        the confirmation button or link. Thank you.
      </p>
    </Layout>
  );
}
