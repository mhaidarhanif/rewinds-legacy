import * as ScrollArea from "@radix-ui/react-scroll-area";

import { classx } from "~/utils";

import type { HTMLElementVariantProps } from "~/types";

export const RadixScrollArea = ({
  variant = "common",
  className,
  children,
}: HTMLElementVariantProps) => {
  return (
    <ScrollArea.Root
      className={classx(
        "overflow-hidden rounded-base",
        [
          variant === "common" && "h-96",
          variant === "lg" && "h-[32rem]",
          variant === "xl" && "h-[42rem]",
          variant === "max" && "h-max",
        ],
        className,
      )}
    >
      <ScrollArea.Viewport className="h-full w-full rounded-base">
        {children}
      </ScrollArea.Viewport>

      <ScrollAreaScrollbar orientation="horizontal" />
      <ScrollAreaScrollbar orientation="vertical" />
      <ScrollArea.Corner className="scroll-area-corner" />
    </ScrollArea.Root>
  );
};

const ScrollAreaScrollbar = ({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) => {
  return (
    <ScrollArea.Scrollbar
      orientation={orientation}
      className="scroll-area-scrollbar"
    >
      <ScrollArea.Thumb className="scroll-area-thumb" />
    </ScrollArea.Scrollbar>
  );
};
