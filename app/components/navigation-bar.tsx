import { MenuIcon } from '@heroicons/react/solid';
import { Icon } from '@vechaiui/react';
import clsx from 'clsx';
import { useState } from 'react';

import {
  Button,
  Collapsible,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
} from '~/components';
import { configNavigationLinks } from '~/configs';

import type { FunctionComponent } from 'react';

interface NavigationBarProps {}

export const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <nav
      id="navigation-bar"
      className="mt-2 select-none rounded-base border-gray-200 bg-neutral-50 p-2 dark:bg-neutral-800 md:mt-2 md:p-4"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex space-x-4">
          <ThemeSwitcher />
          <RemixLink
            to="/"
            className="text-2xl font-black tracking-wide hover:text-primary-500"
          >
            RTSK
          </RemixLink>
        </div>

        <div className="hidden w-full items-center justify-between lg:flex lg:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-4 md:text-sm md:font-medium">
            {configNavigationLinks.map((navItem) => {
              return (
                <li key={navItem.text}>
                  <RemixNavLink
                    to={navItem.to}
                    className={({ isActive }) => {
                      return clsx(
                        isActive && 'text-primary-500',
                        'p-2 font-bold'
                      );
                    }}
                  >
                    {navItem.text}
                  </RemixNavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex space-x-2">
          <NavigationBarAuth />
          <NavigationBarMenu />
        </div>
      </div>
    </nav>
  );
};

interface NavigationBarAuthProps {}

const NavigationBarAuth: FunctionComponent<NavigationBarAuthProps> = () => {
  return (
    <div id="navigation-bar-auth" className="hidden space-x-2 lg:flex">
      <RemixLink
        to="/signin"
        className="btn btn-md btn-ghost"
        data-color="primary"
      >
        Sign in
      </RemixLink>
      <RemixLink
        to="/signup"
        className="btn-solid btn btn-md"
        data-color="primary"
      >
        Sign up
      </RemixLink>
    </div>
  );
};

interface NavigationBarMenuProps {}

export const NavigationBarMenu: FunctionComponent<
  NavigationBarMenuProps
> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root
      id="navigation-bar-menu"
      className="select-none"
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger asChild>
        <Button
          variant="solid"
          color="primary"
          leftIcon={
            <Icon as={MenuIcon} label="gift" className="mr-1 h-4 w-4" />
          }
        >
          Menu
        </Button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <p>Hello</p>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
