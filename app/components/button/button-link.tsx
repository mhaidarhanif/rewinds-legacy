import { RemixLink } from "~/components";
import { classx } from "~/utils";

import type { ButtonLinkProps } from "~/types";

export const ButtonLink = ({
  to,
  size = "md",
  children,
  color = "primary",
  variant = "solid",
  className,
  rightIcon,
  leftIcon,
  ...props
}: ButtonLinkProps) => {
  return (
    <RemixLink
      prefetch="intent"
      to={to}
      data-color={color}
      className={classx(
        `btn-${variant} btn btn-${size} rounded-base`,
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </RemixLink>
  );
};
