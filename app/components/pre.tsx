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
          variant === "xs" && "text-xs",
          variant === "sm" && "text-sm",
          variant === "md" && "text-base",
          variant === "common" && "text-xs sm:text-sm md:text-base",
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
