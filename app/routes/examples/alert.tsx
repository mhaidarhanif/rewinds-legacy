import { ExampleAlerts } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleButtonRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Alert</h1>
        <p>Alert components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleAlerts />
      </article>
    </Layout>
  );
}
