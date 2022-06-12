import type { HTMLElementProps } from "~/types";

interface SpanProps extends HTMLElementProps {}

export const Span = ({ children }: SpanProps) => {
  return <span>{children}</span>;
};
