import { Layout } from "~/layouts";

export default function SubscriptionConfirmed() {
  return (
    <Layout className="prose-config">
      <h1 className="font-comic text-primary-500">Subscription confirmed!</h1>
      <p>Your email is confirmed and on the list. Expect some updates soon.</p>
    </Layout>
  );
}
