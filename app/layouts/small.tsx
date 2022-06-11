import { Footer, NavigationBar } from "~/components";

import type { HTMLElementProps } from "~/types";

export const LayoutSmall = ({ children }: HTMLElementProps) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-content small">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
