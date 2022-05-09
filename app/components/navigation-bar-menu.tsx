import { Menu, Transition } from '@headlessui/react';
import MenuIcon from '@heroicons/react/solid/MenuIcon';
import { NavLink } from '@remix-run/react';
import { Button, Divider, Icon } from '@vechaiui/react';
import { Fragment } from 'react';

import { configNavigationLinksMenu } from '~/configs';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

export { Menu } from '@headlessui/react';

interface NavigationBarMenuProps {}

export const NavigationBarMenu: FunctionComponent<
  NavigationBarMenuProps
> = () => {
  return (
    <div className="flex w-full select-none flex-wrap">
      <Menu as="div" className="menu relative inline-block">
        <Menu.Button
          as={Button}
          variant="solid"
          color="primary"
          leftIcon={
            <Icon as={MenuIcon} label="Menu" className="mr-1 h-4 w-4" />
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
              'menu-items',
              'absolute right-0 z-dropdown mt-2 w-56 min-w-max origin-top-right rounded-sm shadow-sm outline-none',
              'border border-gray-200 bg-white',
              'dark:border-gray-700 dark:bg-neutral-800',
            )}
          >
            <MenuItemsContent />
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

interface MenuItemsContentProps {}

export const MenuItemsContent: FunctionComponent<
  MenuItemsContentProps
> = () => {
  return (
    <div className="menu-items-content px-1 py-1">
      <div role="group">
        {configNavigationLinksMenu.map((group, index) => {
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
                              'flex h-8 w-full flex-shrink-0 cursor-base items-center rounded p-2 px-3 text-left text-sm font-bold transition focus:outline-none',
                              isActive && 'navlink-active', // REMIX
                              active && 'navlink-menu-active', // HUI
                              disabled &&
                                'disabled:cursor-not-allowed disabled:opacity-60',
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
              {configNavigationLinksMenu?.length !== index + 1 && (
                <Divider
                  orientation="horizontal"
                  className="border-neutral-200 dark:border-neutral-700"
                />
              )}
            </div>
          );
        })}
      </div>{' '}
    </div>
  );
};
