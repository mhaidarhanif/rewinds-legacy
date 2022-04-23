/* eslint-disable react/require-default-props */
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      className={classx('hover:underline', className)}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
