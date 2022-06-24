import { Menu, Transition } from "@headlessui/react";
import { Button, Divider } from "@vechaiui/react";

import { Fragment, Anchor, RemixNavLink, VechaiIcon } from "~/components";
import { configNavigationMenu } from "~/configs";
import { IconMenu } from "~/libs";
import { classx } from "~/utils";

import type { LinkOrAnchorItem } from "~/types";

export { Menu } from "@headlessui/react";

interface NavigationBarMenuProps {
  originDirection?: "right" | "left";
}

export const NavigationBarMenu = ({
  originDirection = "right",
}: NavigationBarMenuProps) => {
  return (
    <div className="flex w-full select-none flex-wrap">
      <Menu as="div" className="menu relative inline-block">
        <Menu.Button
          as={Button}
          variant="solid"
          color="primary"
          leftIcon={
            <VechaiIcon as={IconMenu} label="Menu" className="mr-1 h-4 w-4" />
          }
          className="menu-button"
        >
          Menu
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-in-out duration-150"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items
            className={classx(
              `${originDirection}-0 origin-top-${originDirection}`,
              "menu-items shadow-panel bg-panel border-panel",
              "absolute z-dropdown mt-2 w-56 min-w-max rounded-md outline-none",
            )}
          >
            <MenuItemsContent />
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export const MenuItemsContent = () => {
  return (
    <div className="menu-items-content px-1 py-1">
      <div role="group">
        {configNavigationMenu.map((group, index) => {
          return (
            <div role="group" key={group.name}>
              {group?.items &&
                group.items.map((item) => {
                  return <MenuItem key={item.text} item={item} />;
                })}

              {configNavigationMenu?.length !== index + 1 && (
                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />
              )}
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};

interface MenuItemProps {
  item: LinkOrAnchorItem;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Menu.Item>
      {({ active, disabled }) => {
        if ("to" in item) {
          return (
            <RemixNavLink
              end
              to={item.to}
              className={({ isActive }) => {
                return classx(
                  "menu-item",
                  isActive && "navlink-active", // Remix NavLink
                  active && "navlink-menu-active", // Headless UI
                  disabled && "disabled:cursor-not-allowed disabled:opacity-60",
                );
              }}
            >
              {item.text}
            </RemixNavLink>
          );
        }

        if ("href" in item) {
          return (
            <Anchor
              href={item.href}
              className={classx(
                "menu-item",
                active && "navlink-menu-active", // Headless UI
                disabled && "disabled:cursor-not-allowed disabled:opacity-60",
              )}
            >
              {item.text}
            </Anchor>
          );
        }

        return <span className="menu-item">{item["text"]}</span>;
      }}
    </Menu.Item>
  );
};
