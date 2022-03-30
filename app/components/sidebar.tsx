import { FunctionComponent } from 'react';

import { ThemeSwitcher } from '~/components';
import { clsx } from '~/utils';

interface SidebarProps {}

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <aside
      className={clsx(
        'fixed inset-y-0 left-0 px-4 py-4',
        'z-30 bg-neutral-800 text-neutral-400'
      )}
    >
      <ThemeSwitcher />
    </aside>
  );
};
