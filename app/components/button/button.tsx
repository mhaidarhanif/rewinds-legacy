import { Button as VechaiButton } from "@vechaiui/react";

import { classx } from "~/utils";

import type { VechaiButtonProps, VechaiButtonGroupProps } from "~/types";

export const Button = VechaiButton;

export const ButtonHTML = ({ children, ...props }: VechaiButtonProps) => {
  return (
    <button
      type="button"
      className="btn-solid btn btn-md rounded-base"
      data-color="primary"
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonGroup = ({
  attached,
  children,
  className,
  ...props
}: VechaiButtonGroupProps) => {
  return (
    <VechaiButton.Group
      attached={attached}
      className={classx(
        !attached && "flex flex-wrap gap-1 xs:gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </VechaiButton.Group>
  );
};
