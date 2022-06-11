/**
 * Used for React component
 */

export interface HTMLElementProps extends React.HTMLAttributes<HTMLElement> {}

export interface HTMLElementVariantProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "common" | "xs" | "sm" | "md" | "lg" | "xl";
}

export interface HTMLAnchorElementProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {}

export interface HTMLSpanElementProps
  extends React.LinkHTMLAttributes<HTMLSpanElement> {}
