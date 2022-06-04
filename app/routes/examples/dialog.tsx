import { ExampleDialogs } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleDialog() {
  return (
    <Layout>
      <header>
        <h1>Example: Dialog</h1>
        <p>Dialog components with Headless UI, Radix UI, Reach UI.</p>
      </header>

      <article className="example">
        <ExampleDialogs />
      </article>
    </Layout>
  );
}
