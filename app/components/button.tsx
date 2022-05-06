import { Button as VechaiButton } from '@vechaiui/react';

import { classx } from '~/utils';

import type { ButtonProps, ButtonGroupProps } from '@vechaiui/react';
import type { FunctionComponent } from 'react';

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children } = props;

  return <VechaiButton {...props}>{children}</VechaiButton>;
};

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = (props) => {
  const { attached, children } = props;

  return (
    <VechaiButton.Group
      className={classx(!attached && 'flex flex-wrap gap-4')}
      {...props}
    >
      {children}
    </VechaiButton.Group>
  );
};
