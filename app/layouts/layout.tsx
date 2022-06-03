import {
  LayoutBoundary,
  LayoutFull,
  LayoutLarge,
  LayoutMedium,
  LayoutSmall,
} from "~/layouts";

import type { HTMLElementProps } from "~/types";

/**
 * Layout with variant
 * Not size, because there's a boundary-specific layout
 */

interface LayoutProps extends HTMLElementProps {
  variant?: "small" | "medium" | "large" | "full" | "boundary";
}

export const Layout = ({ variant = "small", children }: LayoutProps) => {
  switch (variant) {
    case "small":
      return <LayoutSmall>{children}</LayoutSmall>;
    case "medium":
      return <LayoutMedium>{children}</LayoutMedium>;
    case "large":
      return <LayoutLarge>{children}</LayoutLarge>;
    case "full":
      return <LayoutFull>{children}</LayoutFull>;
    case "boundary":
      return <LayoutBoundary>{children}</LayoutBoundary>;
    default:
      return <div className="layout-none">{children}</div>;
  }
};
