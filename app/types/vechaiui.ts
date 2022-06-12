import type {
  ButtonGroupProps as VechaiButtonGroupProps,
  ButtonProps as VechaiButtonProps,
  CodeProps as VechaiCodeProps,
  ColorHues as VechaiColorHues,
  ColorScheme as VechaiColorScheme,
  IconButtonProps as VechaiIconButtonProps,
  LinkProps as VechaiLinkProps,
  VechaiTheme,
} from "@vechaiui/react";
import type { Position as VechaiPosition } from "@vechaiui/toasted-notes";

export type {
  VechaiButtonGroupProps,
  VechaiButtonProps,
  VechaiCodeProps,
  VechaiColorHues,
  VechaiColorScheme,
  VechaiIconButtonProps,
  VechaiLinkProps,
  VechaiPosition,
  VechaiTheme,
};

export type VechaiSpecifiedTheme = {
  colorScheme: string;
  density: "compact" | "comfortable" | "unset";
  radius: string;
  cursorPointer: boolean;
};

export interface VechaiToast {
  title?: string;
  closeable?: boolean;
  onClose?: () => void;
  onUndo?: () => void;
  description?: string;
  undoText?: string;
  duration?: number | null;
  position?: keyof typeof VechaiPosition;
  message?: string;
  status?: "info" | "success" | "error" | "warning";
  icon?: React.ElementType;
  closeIcon?: React.ElementType;
}
