/**
 * Used for Radix UI components
 */

export type RadixMenuItem = {
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
};

export type RadixDropdownMenuItem = {
  text: string;
  to?: string;
  shortcut?: string;
  icon?: React.ReactNode;
};

export type RadixMenuItems = Array<RadixMenuItem>;
export type RadixDropdownMenuItems = Array<RadixDropdownMenuItem>;
