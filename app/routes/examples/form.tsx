import { H1 } from '~/components';
import { ExampleForms } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleFormRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <H1>Form with Vechai UI</H1>
      </article>

      <div className="mt-10">
        <ExampleForms />
      </div>
    </Layout>
  );
}
