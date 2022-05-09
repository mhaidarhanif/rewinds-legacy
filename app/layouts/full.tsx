import { Footer, NavigationBar } from '~/components';

import type { FunctionComponent } from 'react';
import type { LayoutProps } from '~/types';

export const LayoutFull: FunctionComponent<LayoutProps> = ({ children }) => {
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
