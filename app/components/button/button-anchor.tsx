import { classx } from "~/utils";

import type { ButtonProps } from "~/types";

interface ButtonAnchorProps extends ButtonProps {
  href: string;
}

export const ButtonAnchor = ({
  href,
  children,
  color = "primary",
  variant = "solid",
  size = "md",
  leftIcon,
  rightIcon,
  className,
}: ButtonAnchorProps) => {
  return (
    <a
      href={href}
      data-color={color}
      target="_blank"
      rel="noreferrer"
      className={classx(
        `btn-${variant} btn btn-${size} rounded-base`,
        className,
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
};
