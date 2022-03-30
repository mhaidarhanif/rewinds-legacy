import { FunctionComponent } from 'react';

import { Button, ButtonGroup, H2 } from '~/components';
import { useNotification, useToast } from '~/hooks';

interface ExampleNotificationsProps {}

export const ExampleNotifications: FunctionComponent<
  ExampleNotificationsProps
> = () => {
  const notify = useNotification();
  const toast = useToast();

  const showNotification = (description: string, status?: any) => {
    notify({
      title: 'Hello',
      description,
      status,
      position: 'top-right',
      undoText: 'Undo',
      onUndo: () => {
        toast({
          message: 'Undoing changes...',
          position: 'bottom-right',
          duration: 2000,
        });
      },
    });
  };

  return (
    <div>
      <H2>Notifications</H2>

      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => {
            showNotification('This is Normal');
          }}
        >
          Normal
        </Button>
        <Button
          color="info"
          onClick={() => {
            showNotification('This is Info', 'info');
          }}
        >
          Info
        </Button>
        <Button
          color="success"
          onClick={() => {
            showNotification('This is Success', 'success');
          }}
        >
          Success
        </Button>
        <Button
          color="warning"
          onClick={() => {
            showNotification('This is Warning', 'warning');
          }}
        >
          Warning
        </Button>
        <Button
          color="error"
          onClick={() => {
            showNotification('This is Error', 'error');
          }}
        >
          Error
        </Button>
      </ButtonGroup>
    </div>
  );
};
