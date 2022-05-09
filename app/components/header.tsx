import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { HTMLElementProps } from '~/types';

interface HeaderProps extends HTMLElementProps {}

export const Header: FunctionComponent<HeaderProps> = ({
  children,
  className,
}) => {
  return <header className={classx('header', className)}>{children}</header>;
};
