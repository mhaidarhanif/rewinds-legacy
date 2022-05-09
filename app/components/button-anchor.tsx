import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface ButtonAnchorProps {
  href: string;
  children: React.ReactNode;
  color?: string;
  variant?: 'solid' | 'outline';
  className?: string;
}

export const ButtonAnchor: FunctionComponent<ButtonAnchorProps> = ({
  href,
  children,
  color = 'primary',
  variant = 'solid',
  className,
}) => {
  return (
    <a
      href={href}
      data-color={color}
      className={classx(`btn-${variant} btn btn-md rounded-base`, className)}
    >
      {children}
    </a>
  );
};
