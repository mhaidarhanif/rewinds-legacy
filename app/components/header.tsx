import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

interface HeaderProps extends HTMLElementProps {}

export const Header = ({ children, className }: HeaderProps) => {
  return <header className={classx("header", className)}>{children}</header>;
};
