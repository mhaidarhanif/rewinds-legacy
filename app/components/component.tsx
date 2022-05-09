import type { FunctionComponent } from 'react';
import type { HTMLElementProps } from '~/types';

interface ComponentProps extends HTMLElementProps {}

export const Component: FunctionComponent<ComponentProps> = ({ children }) => {
  return <span>{children}</span>;
};
