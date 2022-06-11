/* eslint-disable react/no-array-index-key */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretRightIcon, FileIcon } from "@radix-ui/react-icons";

import { RemixLink, IconVechai } from "~/components";
import {
  configNavigationDropdownMenuItems,
  configNavigationExamples1,
  configNavigationExamples2,
} from "~/configs";
import { IconMenu, IconSignIn, IconSignOut, IconSignUp } from "~/libs";
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
            <IconVechai as={IconMenu} label="Menu" className="mr-1 h-4 w-4" />
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
                <RemixLink key={to} to={to as string}>
                  <DropdownMenuItem>
                    {icon}
                    <span className="flex-grow">{text}</span>
                    {shortcut && <Shortcut>{shortcut}</Shortcut>}
                  </DropdownMenuItem>
                </RemixLink>
              );
            },
          )}

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Auth</DropdownMenuLabel>
          <RemixLink to="/signup">
            <DropdownMenuItem>
              <IconSignUp className="dropdown-menu-icon" />
              <span className="flex-grow">Sign Up</span>
              <Shortcut>⌘+⇧+U</Shortcut>
            </DropdownMenuItem>
          </RemixLink>
          <RemixLink to="/signin">
            <DropdownMenuItem>
              <IconSignIn className="dropdown-menu-icon" />
              <span className="flex-grow">Sign In</span>
              <Shortcut>⌘+⇧+I</Shortcut>
            </DropdownMenuItem>
          </RemixLink>
          <RemixLink to="/signout">
            <DropdownMenuItem>
              <IconSignOut className="dropdown-menu-icon" />
              <span className="flex-grow">Sign Out</span>
              <Shortcut>⌘+⇧+O</Shortcut>
            </DropdownMenuItem>
          </RemixLink>

          <DropdownMenuSeparator />

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Examples 1</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuSubContent>
              {configNavigationExamples1.map(({ to, text }) => {
                return (
                  <RemixLink key={to} to={to as string}>
                    <DropdownMenuItem>{text}</DropdownMenuItem>
                  </RemixLink>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenuTriggerItem>
              <FileIcon className="dropdown-menu-icon" />
              <span className="flex-grow">Examples 2</span>
            </DropdownMenuTriggerItem>
            <DropdownMenuSubContent>
              {configNavigationExamples2.map(({ to, text }) => {
                return (
                  <RemixLink key={to} to={to as string}>
                    <DropdownMenuItem>{text}</DropdownMenuItem>
                  </RemixLink>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenu.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export const Shortcut = ({ children }: HTMLSpanElementProps) => {
  return <span className="text-sm text-neutral-500">{children}</span>;
};

export const DropdownMenuSeparator = () => {
  return <DropdownMenu.Separator className="bg-separator my-1 h-px" />;
};

export const DropdownMenuLabel = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.Label className="select-none px-2 py-2 text-sm text-gray-700 dark:text-gray-200">
      {children}
    </DropdownMenu.Label>
  );
};

export const DropdownMenuTriggerItem = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.TriggerItem
      className={classx(
        "dropdown-menu-item",
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

export const DropdownMenuSubContent = ({ children }: HTMLElementProps) => {
  return (
    <DropdownMenu.Content
      className={classx(
        "origin-radix-dropdown-menu",
        "radix-side-right:animate-slide-right-fade",
        "radix-side-left:animate-slide-left-fade",
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
        "dropdown-menu-item",
        "flex select-none items-center rounded-md text-sm outline-none",
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
