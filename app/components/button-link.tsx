import { RemixLink } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { LinkProps } from '~/types';

interface ButtonLinkProps extends LinkProps {
  color?: string;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  to,
  children,
  color = 'primary',
  className,
}) => {
  return (
    <RemixLink
      to={to}
      data-color={color}
      className={classx('btn btn-md rounded-base', className)}
    >
      {children}
    </RemixLink>
  );
};
