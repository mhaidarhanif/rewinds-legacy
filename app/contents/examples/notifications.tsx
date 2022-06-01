import { Button, ButtonGroup } from "~/components";
import { configStyle } from "~/configs";
import { useNotification, useToast } from "~/hooks";

export const ExampleNotifications = () => {
  const notify = useNotification();
  const toast = useToast();

  const showNotification = (
    title: string,
    description: string,
    status?: any,
  ) => {
    notify({
      title,
      description,
      status,
      position: configStyle.notification.position,
      undoText: "Undo",
      onUndo: () => {
        toast({
          message: "Undoing changes...",
        });
      },
    });
  };

  return (
    <div>
      <h2>Notifications</h2>

      <ButtonGroup variant="light">
        <Button
          color="primary"
          onClick={() => {
            showNotification("Notification", "This is a normal message");
          }}
        >
          Normal
        </Button>
        <Button
          color="info"
          onClick={() => {
            showNotification(
              "Info Notification",
              "This is an info message",
              "info",
            );
          }}
        >
          Info
        </Button>
        <Button
          color="success"
          onClick={() => {
            showNotification(
              "Success Notification",
              "This is a success message",
              "success",
            );
          }}
        >
          Success
        </Button>
        <Button
          color="warning"
          onClick={() => {
            showNotification(
              "Warning Notification",
              "This is a warning message",
              "warning",
            );
          }}
        >
          Warning
        </Button>
        <Button
          color="error"
          onClick={() => {
            showNotification(
              "Error Notification",
              "This is an error message",
              "error",
            );
          }}
        >
          Error
        </Button>
      </ButtonGroup>
    </div>
  );
};
