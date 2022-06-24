import type { HTMLElementProps } from "~/types";

export interface ComponentProps extends HTMLElementProps {
  children: React.ReactNode;
}
