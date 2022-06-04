import { ExampleAlerts } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <header>
        <h1>Example: Alert</h1>
        <p>Alert components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleAlerts />
      </article>
    </Layout>
  );
}
