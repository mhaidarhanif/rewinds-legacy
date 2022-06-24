import {
  Badge,
  ExternalLinks,
  Logo,
  NavigationBarDropdownMenu,
  NavigationBarNavMenu,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
} from "~/components";
import { configStyle, configNavigationBarLinks } from "~/configs";
import { packageJson } from "~/utils";

interface NavigationBarProps {
  variant?: "simple" | "complex";
}

export const NavigationBar = ({
  variant = configStyle.navigationBar || "complex",
}: NavigationBarProps) => {
  return (
    <nav id="navigation-bar" className="navigation-bar navigation-bar-blur">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 sm:gap-4">
          <NavigationBarLogo />
          <div className="flex gap-1">
            {variant === "simple" && <NavigationBarLinks />}
            {variant === "complex" && <NavigationBarNavMenu />}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden text-xl sm:flex">
            <ExternalLinks />
          </div>

          <ThemeSwitcher variant="ghost" inNavbar isGroup attached={false} />

          <div className="hidden xl:flex">
            <NavigationBarAuth />
          </div>

          <div className="flex xl:hidden">
            <NavigationBarDropdownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavigationBarLogo = () => {
  /**
   * EDITME
   *
   * Or remove it as you wish
   */
  const badgeText = `v${packageJson.version}`;

  return (
    <div className="flex items-center gap-2">
      <RemixLink
        to="/"
        className="text-2xl tracking-wide hover:text-primary-500"
      >
        <Logo />
      </RemixLink>
      <Badge className="hidden xs:flex" color="primary" variant="solid">
        {badgeText}
      </Badge>
    </div>
  );
};

/**
 * For simple variant of the NavigationBar
 * Only get 7 links
 */

export const NavigationBarLinks = () => {
  return (
    <div className="hidden w-auto items-center justify-between xl:flex">
      <ul className="text-md flex flex-row gap-1 font-medium">
        {configNavigationBarLinks.slice(0, 7).map((navItem) => {
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

export const NavigationBarAuth = () => {
  return (
    <div id="navigation-bar-auth" className="space-x-2">
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
