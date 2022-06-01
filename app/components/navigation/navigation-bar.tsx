import {
  ExternalLinks,
  Logo,
  RemixLink,
  RemixNavLink,
  ThemeSwitcher,
  Badge,
  NavigationBarNavMenu,
  NavigationBarMenu,
} from "~/components";
import { configStyle, configNavigationBarLinks } from "~/configs";
import { useEffect, useState } from "~/hooks";
import { classx, packageJson } from "~/utils";

export const NavigationBar = () => {
  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      id="navigation-bar"
      className={classx("navigation-bar", !onTop && "navigation-bar-scrolled")}
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex gap-4">
          <NavigationBarLogo />
          <div className="flex gap-1">
            {configStyle.navigationBar === "simple" && <NavigationBarLinks />}
            {configStyle.navigationBar === "complex" && (
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

export const NavigationBarLogo = () => {
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

export const NavigationBarLinks = () => {
  return (
    <div className="hidden w-auto items-center justify-between xl:flex">
      <ul className="text-md flex flex-row gap-1 font-medium">
        {configNavigationBarLinks.map((navItem) => {
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
