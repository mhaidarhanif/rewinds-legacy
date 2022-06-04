import { ExampleBadges } from "~/contents";
import { Layout } from "~/layouts";

export default function ExampleBadge() {
  return (
    <Layout>
      <header>
        <h1>Example: Badge</h1>
        <p>Badge components with Vechai UI.</p>
      </header>

      <article className="example">
        <ExampleBadges />
      </article>
    </Layout>
  );
}
