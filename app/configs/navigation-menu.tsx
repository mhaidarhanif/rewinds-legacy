import { FileIcon } from "@radix-ui/react-icons";

import type { RadixDropdownMenuItems } from "~/types";

/**
 * Config Navigation Dropdown Menu Items
 *
 * Used in the more complex Dropdown Menu component
 * Can be redundant with the one in the configs/navigation.ts
 * Because these are more complicated with shortcut and icon
 */

export const configNavigationDropdownMenuItems: RadixDropdownMenuItems = [
  {
    to: "/about",
    text: "About",
    shortcut: "⌘+1",
    icon: <FileIcon className="dropdown-menu-icon" />,
  },
  {
    to: "/blog",
    text: "Blog",
    shortcut: "⌘+2",
    icon: <FileIcon className="dropdown-menu-icon" />,
  },
  {
    to: "/subscribe",
    text: "Subscribe",
    shortcut: "⌘+3",
    icon: <FileIcon className="dropdown-menu-icon" />,
  },
  {
    to: "/pricing",
    text: "Pricing",
    shortcut: "⌘+4",
    icon: <FileIcon className="dropdown-menu-icon" />,
  },
  {
    to: "/search",
    text: "Search",
    shortcut: "⌘+5",
    icon: <FileIcon className="dropdown-menu-icon" />,
  },
];
