import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useResolvedPath, NavLink } from '@remix-run/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMatch } from 'react-router-dom';

import {
  configNavigationContentExamples1,
  configNavigationContentExamples2,
  configNavigationContentPages,
} from '~/configs';
import { IconCaretDown } from '~/libs';
import { classx } from '~/utils';

import type { NavLinkProps } from '@remix-run/react';
import type { FunctionComponent } from 'react';

/**
 * Radix UI Navigation Menu with Trigger Buttons and Viewport
 * Used in Navigation Bar
 */

interface NavigationBarNavMenuProps {}

interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationBarNavMenu: FunctionComponent<
  NavigationBarNavMenuProps
> = () => {
  const withIndicator = false;

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItemPages />
        <NavigationMenuItemExamples />

        <NavigationMenuItem>
          <NavigationMenuNavLink to="/subscribe">
            Subscribe
          </NavigationMenuNavLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuNavLink to="/pricing">Pricing</NavigationMenuNavLink>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuAnchor href="https://github.com/mhaidarhanif/rewinds">
            GitHub
          </NavigationMenuAnchor>
        </NavigationMenuItem>

        {withIndicator && <NavigationMenuIndicator />}
      </NavigationMenuList>
      <NavigationMenuViewportPosition>
        <NavigationMenuViewport />
      </NavigationMenuViewportPosition>
    </NavigationMenuRoot>
  );
};

/**
 * Items
 */

export const NavigationMenuItemPages = ({
  forceMount,
}: {
  forceMount?: true;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
      <NavigationMenuContent forceMount={forceMount}>
        <NavigationMenuContentPages />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const NavigationMenuContentPages = () => {
  return (
    <div className="w-[21rem] p-3 lg:w-[23rem]">
      <div className="grid grid-cols-4 gap-2">
        <NavigationMenuNavLink
          to="/"
          className="border-panel col-span-2 flex w-full items-center justify-center rounded-base p-4"
        >
          Home
        </NavigationMenuNavLink>

        <div className="col-span-2">
          <div className="flex w-full flex-col space-y-2">
            {configNavigationContentPages.map((item) => {
              return (
                <NavigationMenuNavLink key={item.text} end to={item.to}>
                  {item.text}
                </NavigationMenuNavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavigationMenuItemExamples = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Examples</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuContentExamples />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export const NavigationMenuAnchor = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenu.Link
      className="nav-menu-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </NavigationMenu.Link>
  );
};

export const NavigationMenuContentExamples = () => {
  return (
    <div className="w-[21rem] p-3 lg:w-[23rem]">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 flex w-full flex-col space-y-2">
          {configNavigationContentExamples1.map((item) => {
            return (
              <NavigationMenuNavLink key={item.text} to={item.to}>
                {item.text}
              </NavigationMenuNavLink>
            );
          })}
        </div>
        <div className="col-span-2 flex w-full flex-col space-y-2">
          {configNavigationContentExamples2.map((item) => {
            return (
              <NavigationMenuNavLink key={item.text} to={item.to}>
                {item.text}
              </NavigationMenuNavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/**
 * Aliases
 */

export const NavigationMenuRoot = ({ children, className }: DefaultProps) => {
  return (
    <NavigationMenu.Root
      className={classx('nav-menu-root', 'relative hidden xl:flex', className)}
    >
      {children}
    </NavigationMenu.Root>
  );
};

export const NavigationMenuList = ({ children, className }: DefaultProps) => {
  return (
    <NavigationMenu.List
      className={classx(
        'nav-menu-list',
        'flex flex-row items-center gap-1 rounded-lg font-medium',
        className,
      )}
    >
      {children}
    </NavigationMenu.List>
  );
};

export const NavigationMenuItem = ({ children, className }: DefaultProps) => {
  return (
    <NavigationMenu.Item
      className={classx('nav-menu-item', 'flex items-center', className)}
    >
      {children}
    </NavigationMenu.Item>
  );
};

/**
 * Navigation Menu Trigger
 * The stylings are inside global.css because need :focus selector
 */

export const NavigationMenuTrigger = ({
  children,
  className,
  ...props
}: DefaultProps) => {
  return (
    <NavigationMenu.Trigger
      {...props}
      className={classx(
        'nav-menu-trigger',
        'navlink-hover focus-visible:focus-ring focus:outline-none',
        'flex items-center gap-1 rounded-base px-3 py-2 font-bold transition-colors',
        className,
      )}
    >
      {children}
      <IconCaretDown aria-hidden size={12} weight="bold" />
    </NavigationMenu.Trigger>
  );
};

export const NavigationMenuContent = ({
  children,
  className,
  forceMount,
}: DefaultProps & {
  forceMount?: true;
}) => {
  return (
    <NavigationMenu.Content
      forceMount={forceMount}
      className={classx(
        'nav-menu-content',
        'absolute top-0 left-0 w-auto rounded-lg',
        'radix-motion-from-start:animate-enter-from-left',
        'radix-motion-from-end:animate-enter-from-right',
        'radix-motion-to-start:animate-exit-to-left',
        'radix-motion-to-end:animate-exit-to-right',
        className,
      )}
    >
      {children}
    </NavigationMenu.Content>
  );
};

export const NavigationMenuLink = ({
  href,
  asChild,
  className,
  children,
}: DefaultProps & {
  href?: string;
  asChild?: boolean;
}) => {
  return (
    <NavigationMenu.Link
      href={href}
      asChild={asChild}
      className={classx('nav-menu-link', className)}
    >
      {children}
    </NavigationMenu.Link>
  );
};

export const NavigationMenuIndicator = ({
  className,
  forceMount,
}: {
  className?: string;
  forceMount?: true;
}) => {
  return (
    <NavigationMenu.Indicator
      forceMount={forceMount}
      className={classx(
        'nav-menu-indicator',
        'overflow-hidden shadow-2xl',
        'top-[100%] flex h-2 items-end justify-center',
        'radix-state-visible:animate-fade-in',
        'radix-state-hidden:animate-fade-out',
        'transition-[width_transform] duration-[250ms] ease-[ease]',
        'z-40',
        className,
      )}
    >
      <div
        className={classx('bg-panel ', 'relative top-2 h-3 w-3 rotate-45')}
      />
    </NavigationMenu.Indicator>
  );
};

export const NavigationMenuViewportPosition = ({
  children,
  className,
}: DefaultProps) => {
  return (
    <div
      className={classx(
        'absolute flex justify-center',
        'left-[-20%] top-[100%] w-[140%]',
        'z-40',
      )}
      style={{
        perspective: '2000px',
      }}
    >
      {children}
    </div>
  );
};

export const NavigationMenuViewport = ({
  className,
  forceMount,
  ...props
}: DefaultProps & {
  forceMount?: true;
}) => {
  return (
    <NavigationMenu.Viewport
      forceMount={forceMount}
      className={classx(
        'nav-menu-viewport',
        'z-40',
        'bg-panel border-panel',
        'relative mt-2 overflow-hidden rounded-base shadow-lg',
        'w-radix-navigation-menu-viewport',
        'h-radix-navigation-menu-viewport',
        'radix-state-open:animate-scale-in-content',
        'radix-state-closed:animate-scale-out-content',
        'origin-[top_center] transition-[width_height] duration-300 ease-[ease]',
      )}
      {...props}
    />
  );
};

/**
 * need-fix: issue with React.forwardRef() and reading 'focus'
 *
 * https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-router-links
 */

export const NavigationMenuNavLink = ({
  children,
  to,
  end,
  className,
}: NavLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const isActive = Boolean(match);

  return (
    <NavigationMenu.Link active={isActive} asChild>
      <NavLink
        to={to}
        end={end}
        className={classx(
          'navlink-hover',
          'rounded-base p-2 font-bold transition-colors',
          isActive && 'navlink-active',
          className,
        )}
      >
        {children}
      </NavLink>
    </NavigationMenu.Link>
  );
};
