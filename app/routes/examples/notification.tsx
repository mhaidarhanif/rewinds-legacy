import { ExampleNotifications } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Notification</h1>
        <p>Notification components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleNotifications />
      </article>
    </Layout>
  );
}
