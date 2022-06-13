import { Code } from "@vechaiui/react";

import { classx } from "~/utils";

import type { VechaiCodeProps } from "~/types";

export const VechaiCode = ({ children, className }: VechaiCodeProps) => {
  return <Code className={classx("text-inherit", className)}>{children}</Code>;
};
