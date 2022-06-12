import { Code as VechaiCode } from "@vechaiui/react";

import { classx } from "~/utils";

import type { VechaiCodeProps } from "~/types";

export const Code = ({ children, className }: VechaiCodeProps) => {
  return (
    <VechaiCode className={classx("text-inherit", className)}>
      {children}
    </VechaiCode>
  );
};
