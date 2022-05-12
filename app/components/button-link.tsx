import { RemixLink } from "~/components";
import { classx } from "~/utils";

import type { LinkProps } from "~/types";

interface ButtonLinkProps extends LinkProps {
  color?: string;
  variant?: "solid" | "outline";
}

export const ButtonLink = ({
  to,
  children,
  color = "primary",
  variant = "solid",
  className,
}: ButtonLinkProps) => {
  return (
    <RemixLink
      to={to}
      data-color={color}
      className={classx(`btn-${variant} btn btn-md rounded-base`, className)}
    >
      {children}
    </RemixLink>
  );
};
