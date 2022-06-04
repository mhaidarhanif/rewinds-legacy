import { ExampleTabs } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleTab() {
  return (
    <Layout>
      <header>
        <h1>Example: Tab</h1>
        <p>Tab components with Headless UI and Radix UI.</p>
      </header>

      <article className="example">
        <ExampleTabs />
      </article>
    </Layout>
  );
}
