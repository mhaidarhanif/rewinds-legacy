import { classx } from "~/utils";

import type { VechaiButtonProps } from "~/types";

interface ButtonAnchorProps extends VechaiButtonProps {
  href: string;
}

export const ButtonAnchor = ({
  href,
  children,
  color,
  variant,
  size,
  leftIcon,
  rightIcon,
  className,
}: ButtonAnchorProps) => {
  return (
    <a
      href={href || "#"}
      data-color={color || "primary"}
      target="_blank"
      rel="noreferrer"
      className={classx(
        `btn-${variant || "solid"} btn btn-${size || "md"} rounded-base`,
        className,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
};
