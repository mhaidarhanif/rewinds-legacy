import { ExampleForms } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleFormRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Form</h1>
        <p>Form components with Vechai UI.</p>
      </article>

      <article className="example">
        <ExampleForms />
      </article>
    </Layout>
  );
}
