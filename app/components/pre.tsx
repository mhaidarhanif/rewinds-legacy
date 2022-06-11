import { classx } from "~/utils";

import type { HTMLElementVariantProps } from "~/types";

export const Pre = ({
  variant = "common",
  className,
  children,
}: HTMLElementVariantProps) => {
  return (
    <pre
      className={classx(
        "border-panel rounded-base bg-primary-900/10 p-2 ",
        [
          variant === "common" && "text-xs sm:text-sm md:text-base",
          variant === "md" && "text-base",
          variant === "sm" && "text-sm",
          variant === "xs" && "text-xs",
        ],
        className,
      )}
    >
      {JSON.stringify(children, null, 2)}
    </pre>
  );
};

interface PreDataProps {
  data: string;
}

export const PreData = ({ data }: PreDataProps) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2 text-xs">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
