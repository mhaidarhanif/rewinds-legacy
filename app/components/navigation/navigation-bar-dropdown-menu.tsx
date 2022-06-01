/* eslint-disable react/no-array-index-key */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretRightIcon, FileIcon } from "@radix-ui/react-icons";

import { VechaiIcon } from "~/components";
import {
  configNavigationDropdownMenuItems,
  configNavigationExamples1,
} from "~/configs";
import { IconMenu } from "~/libs";
import { classx } from "~/utils";

import type { HTMLElementProps, HTMLSpanElementProps } from "~/types";

export const NavigationBarDropdownMenu = () => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            data-color="primary"
            className="var(--vc-cursor) btn-solid btn btn-md flex rounded-base"
          >
            <VechaiIcon as={IconMenu} label="Menu" className="mr-1 h-4 w-4" />
            Menu
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={classx(
            "radix-side-top:animate-slide-up",
            "radix-side-bottom:animate-slide-down",
            "shadow-panel w-48 rounded-md px-1 py-1 md:w-56",
            "bg-panel border-panel",
          )}
        >
          {configNavigationDropdownMenuItems.map(
            ({ to, text, icon, shortcut }) => {
              return (
                <DropdownMenuItem key={to}>
                  {icon}
                  <span className="flex-grow">{text}</span>
                  {shortcut && <Shortcut>{shortcut}</Shortcut>}
                </DropdownMenuItem>
              );
            },
          )}

          <DropdownMenu.Separator className="bg-separator my-1 h-px" />

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Examples 1</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuContent>
              {configNavigationExamples1.map(({ to, text }) => {
                return (
                  <DropdownMenuItem key={to}>
                    <span>{text}</span>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export const Shortcut = ({ children }: HTMLSpanElementProps) => {
  return <span className="text-xs text-neutral-500">{children}</span>;
};

export const DropdownMenuTriggerItem = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.TriggerItem
      className={classx(
        "navlink navlink-size dropdown-menu-item-focus",
        "radix-state-open:bg-primary-100",
        "dark:radix-state-open:bg-neutral-700",
        "flex w-full select-none items-center rounded-md text-sm outline-none",
      )}
    >
      {children}
      <CaretRightIcon className="h-3.5 w-3.5" />
    </DropdownMenu.TriggerItem>
  );
};

export const DropdownMenuContent = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.Content
      className={classx(
        "origin-radix-dropdown-menu",
        "radix-side-right:animate-scale-in",
        "bg-panel shadow-panel border-panel w-full rounded-md px-1 py-1 text-sm",
      )}
    >
      {children}
    </DropdownMenu.Content>
  );
};

export const DropdownMenuItem = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.Item
      className={classx(
        "navlink navlink-size dropdown-menu-item-focus",
        "flex select-none items-center rounded-md text-sm outline-none",
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
