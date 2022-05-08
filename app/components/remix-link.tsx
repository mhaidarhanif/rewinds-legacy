import { NavLink } from '@remix-run/react';

import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { NavLinkProps } from '~/types';

export { Link as RemixLink } from '@remix-run/react';

export const RemixNavLink: FunctionComponent<NavLinkProps> = ({
  children,
  end,
  to,
  className,
}) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => {
        return classx(
          'navlink-hover rounded-base p-2 font-bold transition-colors',
          isActive && 'navlink-active',
          className,
        );
      }}
    >
      {children}
    </NavLink>
  );
};
