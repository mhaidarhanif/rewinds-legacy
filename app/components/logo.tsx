import { IconRewind } from "~/libs";
import { classx } from "~/utils";

import type { HTMLSpanElementProps } from "~/types";

export const Logo = () => {
  return (
    <div
      className={classx(
        "text-2xl sm:text-3xl",
        "flex items-center gap-1 transition-[opacity] duration-300 hover:opacity-80",
      )}
    >
      <LogoIcon />
      <LogoSpan />
    </div>
  );
};

export const LogoIcon = () => {
  return (
    <IconRewind
      weight="fill"
      className={classx("h-6 w-6 sm:h-8 sm:w-8", "fill-primary-500")}
    />
  );
};

// EDITME
export const LogoSpan = ({ className }: HTMLSpanElementProps) => {
  return (
    <span
      className={classx(
        "pr-2 font-black tracking-tightest text-primary-500",
        className,
      )}
    >
      Rewinds
    </span>
  );
};
