import { PrismCodeHighlight } from "~/components";
import { Layout } from "~/layouts";

export default function ExampleCodeHighlight() {
  return (
    <Layout>
      <header>
        <h1>Example: Code Highlight</h1>
        <p>Code highlighting component with PrismJS.</p>
      </header>

      <article className="example">
        <PrismCodeHighlight language="jsx" />
      </article>
    </Layout>
  );
}
