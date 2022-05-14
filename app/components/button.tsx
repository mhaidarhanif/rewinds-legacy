import { Button as VechaiButton } from "@vechaiui/react";

import { classx } from "~/utils";

import type { ButtonProps, ButtonGroupProps } from "~/types";

export const ButtonHTML = ({ children, ...props }: ButtonProps) => {
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

export const Button = ({ children, ...props }: ButtonProps) => {
  return <VechaiButton {...props}>{children}</VechaiButton>;
};

export const ButtonGroup = ({
  attached,
  children,
  ...props
}: ButtonGroupProps) => {
  return (
    <VechaiButton.Group
      className={classx(!attached && "flex flex-wrap gap-4")}
      {...props}
    >
      {children}
    </VechaiButton.Group>
  );
};
