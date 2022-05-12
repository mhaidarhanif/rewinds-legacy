import { Footer, NavigationBar } from '~/components';

import type { HTMLElementProps } from '~/types';

export const LayoutWide = ({ children }: HTMLElementProps) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-main-wide">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
