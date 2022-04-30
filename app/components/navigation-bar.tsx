import {
  MenuNavigation,
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
  Badge,
} from '~/components';
import { configNavigationLinks } from '~/configs';
import { classx, packageJson } from '~/utils';

import type { FunctionComponent } from 'react';

interface NavigationBarProps {}

export const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <nav
      id="navigation-bar"
      className={classx(
        'sticky top-0 z-40 w-full flex-none select-none p-2 transition-colors duration-500 md:p-4 lg:z-50',
        'supports-backdrop-blur:bg-neutral-50/80 bg-neutral-50/80 backdrop-blur dark:border-neutral-50/[0.06] dark:bg-neutral-800/80',
        'border-b border-neutral-900/10'
      )}
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center gap-2">
            <RemixLink
              to="/"
              className="text-2xl font-black tracking-wide hover:text-primary-500"
            >
              <Logo />
            </RemixLink>
            <Badge color="primary" variant="solid">
              v{packageJson.version}
            </Badge>
          </div>

          <div className="hidden w-auto items-center justify-between xl:flex">
            <ul className="text-md flex flex-row font-medium">
              {configNavigationLinks.map((navItem) => {
                return (
                  <li key={navItem.text}>
                    <RemixNavLink
                      end
                      to={navItem.to}
                      className={({ isActive }) => {
                        return classx(
                          isActive && 'navlink-active',
                          'navlink-hover rounded-base p-2 font-bold'
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
        </div>

        <div className="flex items-center space-x-2">
          <ExternalLinks className="hidden text-xl sm:flex" />
          <ThemeSwitcher />
          <NavigationBarMenu />
          <NavigationBarAuth />
        </div>
      </div>
    </nav>
  );
};

interface NavigationBarAuthProps {}

export const NavigationBarAuth: FunctionComponent<
  NavigationBarAuthProps
> = () => {
  return (
    <div id="navigation-bar-auth" className="hidden space-x-2 xl:flex">
      <RemixLink
        to="/signin"
        className="btn btn-md btn-light"
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
  return (
    <div className="flex xl:hidden">
      <MenuNavigation />
    </div>
  );
};
