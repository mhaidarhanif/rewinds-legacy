import { ExampleButtons } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButtonRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Button</h1>
        <p>Button components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleButtons />
      </article>
    </Layout>
  );
}
