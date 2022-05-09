import { Footer, NavigationBar } from '~/components';

import type { FunctionComponent } from 'react';
import type { LayoutProps } from '~/types';

export const LayoutWide: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-center">
        <main className="layout-main-wide">{children}</main>
      </div>

      <Footer />
    </div>
  );
};
