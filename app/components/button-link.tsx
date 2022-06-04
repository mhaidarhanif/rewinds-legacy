import { RemixLink } from "~/components";
import { classx } from "~/utils";

import type { ButtonProps, LinkProps } from "~/types";

type ButtonLinkProps = ButtonProps & LinkProps;

export const ButtonLink = ({
  to,
  size,
  children,
  color = "primary",
  variant = "solid",
  className,
}: ButtonLinkProps) => {
  return (
    <RemixLink
      to={to}
      data-color={color}
      className={classx(
        `btn-${variant} btn btn-${size} rounded-base`,
        className,
      )}
    >
      {children}
    </RemixLink>
  );
};
