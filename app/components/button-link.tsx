import { RemixLink } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { LinkProps } from '~/types';

interface ButtonLinkProps extends LinkProps {
  color?: string;
  variant?: 'solid' | 'outline';
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  to,
  children,
  color = 'primary',
  variant = 'solid',
  className,
}) => {
  return (
    <RemixLink
      to={to}
      data-color={color}
      className={classx(`btn-${variant} btn btn-md rounded-base`, className)}
    >
      {children}
    </RemixLink>
  );
};
