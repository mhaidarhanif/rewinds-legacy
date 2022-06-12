import type { ToastVechai, SpecifiedThemeVechai } from "~/types";

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
  theme: SpecifiedThemeVechai;
  toast: ToastVechai;
  notification: ToastVechai;
  navigationBar: "simple" | "complex";
};
