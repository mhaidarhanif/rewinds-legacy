import { useNavigate } from '@remix-run/react';
import { Button as VechaiButton } from '@vechaiui/react';

import { ButtonAnchor } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { ButtonProps, ButtonGroupProps } from '~/types';

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

export const MitigationButtons = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0);
  };

  return (
    <ButtonGroup>
      <ButtonAnchor href="/">Go to homepage</ButtonAnchor>
      <Button color="primary" onClick={handleReload}>
        Reload page
      </Button>
    </ButtonGroup>
  );
};
