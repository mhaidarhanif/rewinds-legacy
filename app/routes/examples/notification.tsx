import { ExampleNotifications } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <header>
        <h1>Example: Notification</h1>
        <p>Notification components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleNotifications />
      </article>
    </Layout>
  );
}
