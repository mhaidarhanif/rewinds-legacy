/* eslint-disable react/no-array-index-key */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CaretRightIcon,
  CropIcon,
  FileIcon,
  FrameIcon,
  Link2Icon,
  MixerHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

import { VechaiIcon } from "~/components";
import { classx } from "~/utils";

import type { HTMLSpanElementProps, RadixUIMenuItems } from "~/types";
import { IconMenu } from "~/libs";

type User = {
  name: string;
  url?: string;
};

const generalMenuItems: RadixUIMenuItems = [
  {
    label: "New File",
    shortcut: "⌘+N",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Settings",
    shortcut: "⌘+,",
    icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
  },
];

const regionToolMenuItems: RadixUIMenuItems = [
  {
    label: "Frame",
    shortcut: "⌘+F",
    icon: <FrameIcon className="mr-2 h-3.5 w-3.5" />,
  },
  {
    label: "Crop",
    shortcut: "⌘+S",
    icon: <CropIcon className="mr-2 h-3.5 w-3.5" />,
  },
];

const users: User[] = [
  { name: "Adam", url: "https://github.com/adamwathan.png" },
  { name: "Steve", url: "https://github.com/steveschoger.png" },
  { name: "Robin", url: "https://github.com/robinmalfait.png" },
];

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
            "shadow-panel w-48 rounded-lg px-1 py-1 md:w-56",
            "bg-panel border-panel",
          )}
        >
          {generalMenuItems.map(({ label, icon, shortcut }, i) => {
            return (
              <DropdownMenu.Item
                key={`${label}-${i}`}
                className={classx(
                  "navlink navlink-size",
                  "flex select-none items-center rounded-md text-sm outline-none",
                )}
              >
                {icon}
                <span className="flex-grow">{label}</span>
                {shortcut && <Shortcut>{shortcut}</Shortcut>}
              </DropdownMenu.Item>
            );
          })}

          <DropdownMenu.Separator className="bg-separator my-1 h-px" />

          <DropdownMenu.Label
            className={classx(
              "navlink-size",
              "select-none text-sm text-neutral-700 dark:text-neutral-200",
            )}
          >
            Region Tools
          </DropdownMenu.Label>

          {regionToolMenuItems.map(({ label, icon, shortcut }, i) => {
            return (
              <DropdownMenu.Item
                key={`${label}-${i}`}
                className={classx(
                  "navlink navlink-size",
                  "flex select-none items-center rounded-md  text-sm outline-none",
                )}
              >
                {icon}
                <span className="flex-grow">{label}</span>
                {shortcut && <Shortcut>{shortcut}</Shortcut>}
              </DropdownMenu.Item>
            );
          })}

          <DropdownMenu.Separator className="bg-separator my-1 h-px" />

          <DropdownMenu.Root>
            <DropdownMenu.TriggerItem
              className={classx(
                "navlink navlink-size",
                "flex w-full cursor-default select-none items-center rounded-md text-sm outline-none",
                "radix-state-open:bg-primary-100",
                "dark:radix-state-open:bg-neutral-700",
              )}
            >
              <Link2Icon className="mr-2 h-3.5 w-3.5" />
              <span className="flex-grow">Examples</span>
              <CaretRightIcon className="h-3.5 w-3.5" />
            </DropdownMenu.TriggerItem>
            <DropdownMenu.Content
              className={classx(
                "origin-radix-dropdown-menu",
                "radix-side-right:animate-scale-in",
                "bg-panel shadow-panel border-panel w-full rounded-md px-1 py-1 text-sm",
              )}
            >
              {users.map(({ name, url }, i) => {
                return (
                  <DropdownMenu.Item
                    key={`${name}-${i}`}
                    className={classx(
                      "navlink navlink-size",
                      "flex w-28 cursor-default select-none items-center rounded-md  text-sm outline-none md:w-32",
                    )}
                  >
                    {url ? (
                      <img
                        alt={name}
                        className="mr-2.5 h-6 w-6 rounded-full"
                        src={url}
                      />
                    ) : (
                      <PersonIcon className="mr-2.5 h-6 w-6" />
                    )}
                    <span className="">{name}</span>
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export const Shortcut = ({ children }: HTMLSpanElementProps) => {
  return <span className="text-xs text-neutral-500">{children}</span>;
};
