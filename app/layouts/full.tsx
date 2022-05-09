import { Footer, NavigationBar } from '~/components';

import type { FunctionComponent } from 'react';
import type { HTMLElementProps } from '~/types';

export const LayoutFull: FunctionComponent<HTMLElementProps> = ({
  children,
}) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-center">
        <main className="layout-main-full">{children}</main>
      </div>

      <Footer />
    </div>
  );
};
