import { Button, ButtonGroup } from "~/components";
import { configStyle } from "~/configs";
import { useToast } from "~/hooks";

export const ExampleToasts = () => {
  const toast = useToast();

  const showToast = (message: string, status?: any) => {
    toast({
      message,
      status,
      position: configStyle.toast.position,
    });
  };

  return (
    <article>
      <h2>Toasts</h2>

      <ButtonGroup variant="solid">
        <Button
          color="primary"
          onClick={() => {
            showToast("This is Normal");
          }}
        >
          Normal
        </Button>
        <Button
          color="info"
          onClick={() => {
            showToast("This is Info", "info");
          }}
        >
          Info
        </Button>
        <Button
          color="success"
          onClick={() => {
            showToast("This is Success", "success");
          }}
        >
          Success
        </Button>
        <Button
          color="warning"
          onClick={() => {
            showToast("This is Warning", "warning");
          }}
        >
          Warning
        </Button>
        <Button
          color="error"
          onClick={() => {
            showToast("This is Error", "error");
          }}
        >
          Error
        </Button>
      </ButtonGroup>
    </article>
  );
};
