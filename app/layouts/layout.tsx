import {
  LayoutBoundary,
  LayoutCommon,
  LayoutFull,
  LayoutWide,
} from "~/layouts";

import type { HTMLElementProps } from "~/types";

/**
 * Layout with variants
 */

interface LayoutProps extends HTMLElementProps {
  variant?: "common" | "wide" | "full" | "boundary";
}

export const Layout = ({ variant = "common", children }: LayoutProps) => {
  if (variant === "common") {
    return <LayoutCommon>{children}</LayoutCommon>;
  }

  if (variant === "wide") {
    return <LayoutWide>{children}</LayoutWide>;
  }

  if (variant === "full") {
    return <LayoutFull>{children}</LayoutFull>;
  }

  if (variant === "boundary") {
    return <LayoutBoundary>{children}</LayoutBoundary>;
  }

  return <div className="layout-none">{children}</div>;
};
