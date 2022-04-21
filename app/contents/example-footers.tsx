import { H2 } from '~/components';

import type { FunctionComponent } from 'react';

interface ExampleFootersProps {}

export const ExampleFooters: FunctionComponent<ExampleFootersProps> = () => {
  return (
    <div>
      <H2>Footers</H2>

      <footer>Footer</footer>
    </div>
  );
};
