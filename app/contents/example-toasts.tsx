import { FunctionComponent } from 'react';

import { Button, ButtonGroup, H2 } from '~/components';
import { useToast } from '~/hooks';

interface ExampleToastsProps {}

export const ExampleToasts: FunctionComponent<ExampleToastsProps> = () => {
  const toast = useToast();

  const showToast = (message: string, status?: any) => {
    toast({
      message,
      status,
      position: 'bottom-right',
      duration: 2000,
    });
  };

  return (
    <div>
      <H2>Toasts</H2>

      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => {
            showToast('This is Normal');
          }}
        >
          Normal
        </Button>
        <Button
          color="info"
          onClick={() => {
            showToast('This is Info', 'info');
          }}
        >
          Info
        </Button>
        <Button
          color="success"
          onClick={() => {
            showToast('This is Success', 'success');
          }}
        >
          Success
        </Button>
        <Button
          color="warning"
          onClick={() => {
            showToast('This is Warning', 'warning');
          }}
        >
          Warning
        </Button>
        <Button
          color="error"
          onClick={() => {
            showToast('This is Error', 'error');
          }}
        >
          Error
        </Button>
      </ButtonGroup>
    </div>
  );
};
