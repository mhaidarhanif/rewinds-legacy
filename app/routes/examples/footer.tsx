import { ExampleFooters } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleFooter() {
  return (
    <Layout variant="full">
      <header>
        <h1>Example: Footer</h1>
        <p>Footer components with plain Tailwind and Hyper UI.</p>
      </header>

      <article className="example">
        <ExampleFooters />
      </article>
    </Layout>
  );
}
