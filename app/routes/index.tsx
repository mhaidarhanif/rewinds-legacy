import {
  ExampleAlerts,
  ExampleButtons,
  ExampleForms,
  ExampleToasts,
  Intro,
} from '~/contents';
import { ExampleNotifications } from '~/contents/example-notifications';
import { Layout } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    return [{ route: `/`, priority: 1 }];
  },
};

export default function IndexRoute() {
  return (
    <Layout>
      <Intro />
      <ExampleButtons />
      <ExampleForms />
      <ExampleAlerts />
      <ExampleToasts />
      <ExampleNotifications />
    </Layout>
  );
}
