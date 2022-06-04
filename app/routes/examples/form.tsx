import { ExampleForms } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleForm() {
  return (
    <Layout>
      <header>
        <h1>Example: Form</h1>
        <p>Form components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleForms />
      </article>
    </Layout>
  );
}
