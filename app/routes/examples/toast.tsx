import { ExampleToasts } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Toast</h1>
        <p>Toast components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleToasts />
      </article>
    </Layout>
  );
}
