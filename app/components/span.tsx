import type { FunctionComponent } from 'react';
import type { HTMLElementProps } from '~/types';

interface SpanProps extends HTMLElementProps {}

export const Span: FunctionComponent<SpanProps> = ({ children }) => {
  return <span>{children}</span>;
};
