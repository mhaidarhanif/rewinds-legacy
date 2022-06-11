import { Footer, NavigationBar } from "~/components";

import type { HTMLElementProps } from "~/types";

export const LayoutMedium = ({ children }: HTMLElementProps) => {
  return (
    <div className="layout">
      <NavigationBar />

      <div className="layout-container">
        <div className="layout-center">
          <main className="layout-content medium">{children}</main>
        </div>
      </div>

      <Footer />
    </div>
  );
};
