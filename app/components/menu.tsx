import { Menu, Transition } from '@headlessui/react';
import MenuIcon from '@heroicons/react/solid/MenuIcon';
import { Button, Divider, Icon } from '@vechaiui/react';
import React from 'react';

import { RemixNavLink } from '~/components';
import { clsx } from '~/utils';

import type { FunctionComponent } from 'react';

export { Menu } from '@headlessui/react';

interface MenuNavigationProps {}

const navigationLinksData = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Examples', to: '/examples' },
  { text: 'Debug', to: '/debug' },
  { text: 'REST', to: '/rest' },
  { text: 'GraphQL', to: '/graphql' },
  { text: 'Sign up', to: '/signup' },
  { text: 'Sign in', to: '/signin' },
  { text: 'Sign out', to: '/signout' },
];

export const MenuNavigation: FunctionComponent<MenuNavigationProps> = () => {
  return (
    <div className="flex w-full flex-wrap">
      <Menu as="div" className="relative inline-block ">
        <Menu.Button
          as={Button}
          variant="solid"
          color="primary"
          leftIcon={
            <Icon as={MenuIcon} label="gift" className="mr-1 h-4 w-4" />
          }
        >
          Menu
        </Menu.Button>

        <Transition
          as={React.Fragment}
          enter="transition ease-in-out duration-150"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items
            className={clsx(
              'absolute right-0 z-dropdown mt-2 w-56 min-w-max origin-top-right rounded-md shadow-sm outline-none',
              'border border-gray-200 bg-white',
              'dark:border-gray-700 dark:bg-neutral-800'
            )}
          >
            <div className="px-1 py-1">
              <div role="group">
                {navigationLinksData.map((item) => {
                  return (
                    <Menu.Item key={item.to}>
                      {({ active, disabled }) => {
                        return (
                          <RemixNavLink
                            to={item.to}
                            className={({ isActive }) => {
                              return clsx(
                                'flex h-8 w-full flex-shrink-0 cursor-base items-center rounded p-2 px-3 text-left text-sm font-bold focus:outline-none',
                                isActive && 'bg-primary-50 text-primary-500',
                                active && 'bg-primary-100',
                                disabled &&
                                  'disabled:cursor-not-allowed disabled:opacity-60'
                              );
                            }}
                          >
                            {item.text}
                          </RemixNavLink>
                        );
                      }}
                    </Menu.Item>
                  );
                })}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

interface MenuExampleProps {}

export const MenuExample: FunctionComponent<MenuExampleProps> = () => {
  return (
    <div className="flex w-full flex-wrap">
      <Menu as="div" className="relative inline-block ">
        <Menu.Button as={Button} variant="light" color="primary">
          Menu
        </Menu.Button>

        <Transition
          as={React.Fragment}
          enter="transition ease-in-out duration-150"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-out duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items
            className={clsx(
              'absolute right-0 z-dropdown mt-2 w-56 min-w-max origin-top-right rounded-md shadow-sm outline-none',
              'border border-gray-200 bg-white',
              'dark:border-gray-700 dark:bg-neutral-800'
            )}
          >
            <div className="px-1 py-1">
              <div role="group">
                <div className="mx-3 my-2 text-sm font-semibold">Profile</div>
                <Menu.Item>
                  {({ active, disabled }) => {
                    return (
                      <button
                        type="button"
                        disabled={disabled}
                        aria-disabled={disabled}
                        className={clsx(
                          'flex h-8 w-full flex-shrink-0 cursor-base items-center rounded px-3 text-left text-sm focus:outline-none',
                          active && 'bg-primary-500 text-white',
                          disabled &&
                            'disabled:cursor-not-allowed disabled:opacity-60'
                        )}
                      >
                        My Account
                      </button>
                    );
                  }}
                </Menu.Item>
              </div>

              <Divider
                orientation="horizontal"
                className="border-neutral-200 dark:border-neutral-700"
              />

              <div role="group">
                <div className="mx-3 my-2 text-sm font-semibold">Help</div>
                <Menu.Item>
                  {({ active, disabled }) => {
                    return (
                      <button
                        type="button"
                        disabled={disabled}
                        aria-disabled={disabled}
                        className={clsx(
                          'flex h-8 w-full flex-shrink-0 cursor-base items-center rounded px-3 text-left text-sm focus:outline-none',
                          active && 'bg-primary-500 text-white',
                          disabled &&
                            'disabled:cursor-not-allowed disabled:opacity-60'
                        )}
                      >
                        Docs
                      </button>
                    );
                  }}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
