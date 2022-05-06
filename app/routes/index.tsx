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
    <Layout className="divide space-y-20 divide-y-2 divide-primary-100 dark:divide-primary-900">
      <Intro />
      <ExampleButtons />
      <ExampleForms />
      <ExampleAlerts />
      <ExampleToasts />
      <ExampleNotifications />
    </Layout>
  );
}
