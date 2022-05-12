import type { HTMLElementProps } from "~/types";

/**
 * Layout Boundary
 * for CatchBoundary and ErrorBoundary
 */

export const LayoutBoundary = ({ children }: HTMLElementProps) => {
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
