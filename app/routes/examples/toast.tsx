import { ExampleToasts } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <header>
        <h1>Example: Toast</h1>
        <p>Toast components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleToasts />
      </article>
    </Layout>
  );
}
