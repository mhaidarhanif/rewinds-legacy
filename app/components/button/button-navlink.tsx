import { RemixNavLink } from "~/components";
import { classx } from "~/utils";

import type { RemixNavLinkProps, VechaiButtonProps } from "~/types";

export type RemixNavLinkButtonProps = VechaiButtonProps & RemixNavLinkProps;
/**
 * Note: interface cannot simultaneously extend types
 */

export const RemixNavLinkButton = ({
  children,
  className,
  color,
  leftIcon,
  rightIcon,
  size,
  to,
  variant,
  ...props
}: RemixNavLinkButtonProps) => {
  return (
    <RemixNavLink
      prefetch="intent"
      to={to || "/"}
      data-color={color || "primary"}
      className={classx(
        `btn-${variant || "solid"} btn btn-${size || "md"} rounded-base`,
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </RemixNavLink>
  );
};
