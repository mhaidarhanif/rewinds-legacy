import { ExampleBadges } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleBadgeRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Badge</h1>
        <p>Badge components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleBadges />
      </article>
    </Layout>
  );
}
