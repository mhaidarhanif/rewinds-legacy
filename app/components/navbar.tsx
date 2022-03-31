import { MenuIcon } from '@heroicons/react/solid';
import { Icon, IconButton } from '@vechaiui/react';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

import { Button, RemixLink, RemixNavLink, ThemeSwitcher } from '~/components';
import { configNavigationLinks } from '~/configs';

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav
      id="navbar"
      className="mt-4 rounded-[var(--vc-rounded)] border-gray-200 bg-white p-4 dark:bg-gray-800"
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

        <div className="hidden w-full items-center justify-between md:flex md:w-auto">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {configNavigationLinks.map((navItem) => {
              return (
                <li key={navItem.text}>
                  <RemixNavLink
                    to={navItem.to}
                    className={({ isActive }) => {
                      return clsx(
                        'border-b-2 p-2 font-bold',
                        isActive && 'border-primary-500'
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
          <Button variant="ghost">Sign in</Button>
          <Button color="primary">Sign up</Button>
          <NavbarMenu />
        </div>
      </div>
    </nav>
  );
};

interface NavbarMenuProps {}

export const NavbarMenu: FunctionComponent<NavbarMenuProps> = () => {
  return (
    <div className="md:hidden">
      <IconButton
        variant="solid"
        color="primary"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <Icon as={MenuIcon} label="Menu" className="h-4 w-4" />
      </IconButton>
    </div>
  );
};
