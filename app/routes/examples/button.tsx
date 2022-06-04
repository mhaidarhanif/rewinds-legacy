import { ExampleButtons } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <header>
        <h1>Example: Button</h1>
        <p>Button components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleButtons />
      </article>
    </Layout>
  );
}
