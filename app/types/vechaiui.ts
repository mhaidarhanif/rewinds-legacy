import type { Position } from '@vechaiui/toasted-notes';

export type { ColorScheme, VechaiTheme } from '@vechaiui/react';

export interface IToast {
  /**
   * The title of the toast.
   */
  title?: string;
  /**
   * If `true` adds a close button to the toast.
   */
  closeable?: boolean;
  /**
   * Callback function to close the toast.
   */
  onClose?: () => void;
  /**
   * Callback function to undo the toast.
   */
  onUndo?: () => void;
  /**
   * The description of the toast
   */
  description?: string;
  /**
   * The undo text of the toast
   */
  undoText?: string;
  /**
   * Duration before dismiss in milliseconds, or `null` to never dismiss.
   */
  duration?: number | null;
  /**
   * One of toasted-notes positions.
   */
  position?: keyof typeof Position;
  /**
   * The message of the toast
   */
  message?: string;
  /**
   * The status of the toast
   */
  status?: 'info' | 'success' | 'error' | 'warning';
  /**
   * Custom icon
   */
  icon?: React.ElementType;
  /**
   * Custom close icon
   */
  closeIcon?: React.ElementType;
}
