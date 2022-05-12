import type { Position } from "@vechaiui/toasted-notes";

export type {
  ColorScheme,
  VechaiTheme,
  ButtonProps,
  CodeProps,
  ButtonGroupProps,
} from "@vechaiui/react";

export type SpecifiedTheme = {
  colorScheme: string;
  density: "compact" | "comfortable" | "unset";
  radius: string;
  cursorPointer: boolean;
};

export interface IToast {
  title?: string;
  closeable?: boolean;
  onClose?: () => void;
  onUndo?: () => void;
  description?: string;
  undoText?: string;
  duration?: number | null;
  position?: keyof typeof Position;
  message?: string;
  status?: "info" | "success" | "error" | "warning";
  icon?: React.ElementType;
  closeIcon?: React.ElementType;
}
