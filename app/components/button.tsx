import {
  Button as VechaiButton,
  ButtonProps,
  ButtonGroupProps,
} from '@vechaiui/react';
import { FunctionComponent } from 'react';

import { clsx } from '~/utils';

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children } = props;

  return <VechaiButton {...props}>{children}</VechaiButton>;
};

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = (props) => {
  const { attached, children } = props;

  return (
    <VechaiButton.Group className={clsx(!attached && 'space-x-2')} {...props}>
      {children}
    </VechaiButton.Group>
  );
};
