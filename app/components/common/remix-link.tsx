import { NavLink } from "@remix-run/react";

import { classx } from "~/utils";

import type { RemixNavLinkProps } from "~/types";

export { Link as RemixLink } from "@remix-run/react";

export const RemixNavLink = ({
  children,
  end,
  to,
  className,
}: RemixNavLinkProps) => {
  return (
    <NavLink
      prefetch="intent"
      to={to}
      end={end}
      className={({ isActive }) => {
        return classx(
          "navlink",
          "rounded-base p-2 font-bold transition-colors",
          isActive && "navlink-active",
          className,
        );
      }}
    >
      {children}
    </NavLink>
  );
};
