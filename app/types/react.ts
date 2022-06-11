/**
 * Used for React component
 */

import type { ButtonProps } from "~/types";

export interface HTMLElementProps extends React.HTMLAttributes<HTMLElement> {}

export interface HTMLElementVariantProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "common" | "max" | ButtonProps["size"];
}

export interface HTMLAnchorElementProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {}

export interface HTMLSpanElementProps
  extends React.LinkHTMLAttributes<HTMLSpanElement> {}
