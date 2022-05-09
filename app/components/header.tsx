import type { FunctionComponent } from 'react';
import type { HTMLElementProps } from '~/types';

interface HeaderProps extends HTMLElementProps {}

export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
};
