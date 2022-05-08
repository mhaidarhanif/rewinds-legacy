import { H1 } from '~/components';
import { ExampleButtons } from '~/contents';
import { Layout } from '~/layouts';

export default function ExampleButtonRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <H1>Button with Vechai UI</H1>
      </article>

      <ExampleButtons />
    </Layout>
  );
}
