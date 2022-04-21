import * as Collapsible from '@radix-ui/react-collapsible';

import type { FunctionComponent } from 'react';

interface CollapsibleExampleProps {}

const CollapsibleExample: FunctionComponent<CollapsibleExampleProps> = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger />
      <Collapsible.Content />
    </Collapsible.Root>
  );
};

export { CollapsibleExample, Collapsible };
