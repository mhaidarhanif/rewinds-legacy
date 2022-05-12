import type { IToast, SpecifiedTheme } from "~/types";

/**
 * Config Style
 * Used for themes and components
 */

export const configStyle: ConfigStyle = {
  theme: {
    colorScheme: "day",
    density: "comfortable",
    radius: "0.375rem",
    cursorPointer: true,
  },
  toast: {
    position: "bottom-right",
  },
  notification: {
    position: "bottom-right",
  },
  navigationBar: "complex",
};

export type ConfigStyle = {
  theme: SpecifiedTheme;
  toast: IToast;
  notification: IToast;
  navigationBar: "simple" | "complex";
};
