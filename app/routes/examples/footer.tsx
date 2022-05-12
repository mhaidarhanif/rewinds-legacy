import { ExampleFooters } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleFooter() {
  return (
    <Layout variant="full">
      <article className="prose-config px-4">
        <h1>Example: Footer</h1>
        <p>Footer components with plain Tailwind and Hyper UI.</p>
      </article>

      <article className="example px-4">
        <ExampleFooters />
      </article>
    </Layout>
  );
}
