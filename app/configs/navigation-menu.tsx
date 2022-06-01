import { FileIcon } from "@radix-ui/react-icons";

import { configNavigationPages } from "~/configs";

import type { RadixDropdownMenuItems } from "~/types";

/**
 * Config Navigation Dropdown Menu Items
 *
 * Used in the more complex Dropdown Menu component
 * Allowed to be redundant with the one in the configs/navigation.ts
 * Because these are more complicated with shortcut and icon
 */

export const configNavigationDropdownMenuItems: RadixDropdownMenuItems =
  configNavigationPages.map((item, index) => {
    return {
      ...item,
      shortcut: `⌘+${index + 1}`,
      icon: <FileIcon className="dropdown-menu-icon" />,
    };
  });
