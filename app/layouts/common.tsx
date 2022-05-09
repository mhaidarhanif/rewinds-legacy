import { Footer, NavigationBar } from '~/components';

import type { FunctionComponent } from 'react';
import type { LayoutProps } from '~/types';

export const LayoutCommon: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-main">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
