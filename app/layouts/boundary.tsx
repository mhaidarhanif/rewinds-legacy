import type { FunctionComponent } from 'react';
import type { LayoutProps } from '~/types';

/**
 * Layout Boundary
 * for CatchBoundary and ErrorBoundary
 */

export const LayoutBoundary: FunctionComponent<LayoutProps> = ({
  children,
}) => {
  return (
    <div className="layout border border-4 border-red-600">
      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-main">{children}</main>
        </div>
      </div>
    </div>
  );
};
