import {
  ExampleAlerts,
  ExampleButtons,
  ExampleForms,
  ExampleToasts,
  Intro,
} from '~/contents';
import { ExampleNotifications } from '~/contents/example-notifications';

export default function IndexRoute() {
  return (
    <div>
      <Intro />
      <ExampleButtons />
      <ExampleForms />
      <ExampleAlerts />
      <ExampleToasts />
      <ExampleNotifications />
    </div>
  );
}
