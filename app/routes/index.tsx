import { Layout } from '~/components';
import {
  ExampleAlerts,
  ExampleButtons,
  ExampleForms,
  ExampleToasts,
} from '~/contents';
import { ExampleNotifications } from '~/contents/example-notifications';

export default function Index() {
  return (
    <Layout>
      <ExampleButtons />
      <ExampleForms />
      <ExampleAlerts />
      <ExampleToasts />
      <ExampleNotifications />
    </Layout>
  );
}
