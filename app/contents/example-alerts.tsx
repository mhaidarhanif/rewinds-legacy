import { Alert } from '@vechaiui/react';
import { FunctionComponent } from 'react';

import { H2 } from '~/components';

interface ExampleAlertsProps {}

export const ExampleAlerts: FunctionComponent<ExampleAlertsProps> = () => {
  return (
    <div>
      <H2>Alerts</H2>

      <div className="flex w-full flex-col space-y-4">
        <Alert variant="solid" className="alert-yellow">
          Alert solid
          <Alert.CloseButton />
        </Alert>

        <Alert variant="subtle">
          Alert subtle
          <Alert.CloseButton />
        </Alert>

        <Alert variant="left-accent">
          Alert left accent
          <Alert.CloseButton />
        </Alert>
      </div>
    </div>
  );
};
