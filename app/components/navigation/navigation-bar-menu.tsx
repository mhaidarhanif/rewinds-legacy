import { Menu, Transition } from "@headlessui/react";
import { NavLink } from "@remix-run/react";
import { Button, Divider } from "@vechaiui/react";
import { Fragment } from "react";

import { VechaiIcon } from "~/components";
import { configNavigationMenu } from "~/configs";
import { IconMenu } from "~/libs";
import { classx } from "~/utils";

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
              {group.links.map((link) => {
                return (
                  <Menu.Item key={link.text}>
                    {({ active, disabled }) => {
                      return (
                        <NavLink
                          end
                          to={link.to}
                          className={({ isActive }) => {
                            return classx(
                              "flex h-8 w-full flex-shrink-0 cursor-base items-center rounded-base p-2 px-3 text-left text-sm font-bold transition focus:outline-none",
                              isActive && "navlink-active", // REMIX
                              active && "navlink-menu-active", // HUI
                              disabled &&
                                "disabled:cursor-not-allowed disabled:opacity-60",
                            );
                          }}
                        >
                          {link.text}
                        </NavLink>
                      );
                    }}
                  </Menu.Item>
                );
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
