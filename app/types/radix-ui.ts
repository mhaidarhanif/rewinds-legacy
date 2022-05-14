/**
 * Used for Radix UI components
 */

export type RadixUIMenuItem = {
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

export type RadixUIMenuItems = Array<RadixUIMenuItem>;
export type RadixDropdownMenuItems = Array<RadixDropdownMenuItem>;
