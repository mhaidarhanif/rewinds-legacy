import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import type { FunctionComponent } from 'react';

interface DropdownMenuExampleProps {}

const DropdownMenuExample: FunctionComponent<DropdownMenuExampleProps> = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger />

      <DropdownMenu.Content>
        <DropdownMenu.Label />
        <DropdownMenu.Item />

        <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Root>
          <DropdownMenu.TriggerItem />
          <DropdownMenu.Content />
        </DropdownMenu.Root>

        <DropdownMenu.Separator />
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { DropdownMenu, DropdownMenuExample };
