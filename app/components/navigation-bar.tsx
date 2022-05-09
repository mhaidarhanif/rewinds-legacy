import {
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
  Badge,
  NavigationBarNavMenu,
  NavigationBarMenu,
} from '~/components';
import { configStyle, configNavigationLinks } from '~/configs';
import { packageJson } from '~/utils';

import type { FunctionComponent } from 'react';

interface NavigationBarProps {}

export const NavigationBar: FunctionComponent<NavigationBarProps> = () => {
  return (
    <nav id="navigation-bar" className="navigation-bar">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex gap-4">
          <NavigationBarLogo />
          <div className="flex gap-1">
            {configStyle.navigationBar === 'simple' && <NavigationBarLinks />}
            {configStyle.navigationBar === 'complex' && (
              <NavigationBarNavMenu />
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <ExternalLinks className="hidden text-xl sm:flex" />
          <ThemeSwitcher />
          <NavigationBarAuth />
          <div className="flex xl:hidden">
            <NavigationBarMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavigationBarLogoProps {}

export const NavigationBarLogo: FunctionComponent<
  NavigationBarLogoProps
> = () => {
  return (
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
  );
};

interface NavigationBarLinksProps {}

export const NavigationBarLinks: FunctionComponent<
  NavigationBarLinksProps
> = () => {
  return (
    <div className="hidden w-auto items-center justify-between xl:flex">
      <ul className="text-md flex flex-row gap-1 font-medium">
        {configNavigationLinks.map((navItem) => {
          return (
            <li key={navItem.text}>
              <RemixNavLink end to={navItem.to}>
                {navItem.text}
              </RemixNavLink>
            </li>
          );
        })}
      </ul>
    </div>
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
