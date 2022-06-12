import type {
  ButtonGroupProps,
  ButtonProps,
  CodeProps,
  ColorHues,
  ColorScheme,
  IconButtonProps,
  LinkProps as VechaiLinkProps,
  VechaiTheme,
} from "@vechaiui/react";
import type { Position as VechaiPosition } from "@vechaiui/toasted-notes";
import type { RemixLinksProps } from "~/types";

export type {
  ButtonGroupProps,
  ButtonProps,
  CodeProps,
  ColorHues,
  ColorScheme,
  IconButtonProps,
  VechaiPosition,
  VechaiLinkProps,
  VechaiTheme,
};

export type ButtonLinkProps = ButtonProps & RemixLinksProps;
/**
 * Note: interface cannot simultaneously extend types
 */

export type SpecifiedThemeVechai = {
  colorScheme: string;
  density: "compact" | "comfortable" | "unset";
  radius: string;
  cursorPointer: boolean;
};

export interface ToastVechai {
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
