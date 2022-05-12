import { Button as VechaiButton } from "@vechaiui/react";

import { classx } from "~/utils";

import type { ButtonProps, ButtonGroupProps } from "~/types";

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return <VechaiButton {...props}>{children}</VechaiButton>;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { attached, children } = props;

  return (
    <VechaiButton.Group
      className={classx(!attached && "flex flex-wrap gap-4")}
      {...props}
    >
      {children}
    </VechaiButton.Group>
  );
};
