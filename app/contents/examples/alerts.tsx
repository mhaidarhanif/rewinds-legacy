import { Alert, H2, H3 } from "~/components";

export const ExampleAlerts = () => {
  return (
    <div className="space-y-8">
      <H2>Alerts</H2>

      <H3>Alerts with variants</H3>
      <div className="flex w-full flex-col space-y-4">
        <Alert variant="solid">
          Alert solid
          <Alert.CloseButton />
        </Alert>

        <Alert variant="subtle">
          Alert subtle
          <Alert.CloseButton />
        </Alert>

        <Alert variant="left-accent">
          Alert left accent
          <Alert.CloseButton />
        </Alert>
      </div>

      <H3>Alerts with solid colors</H3>
      <div className="flex w-full flex-col space-y-4">
        <Alert variant="solid" color="info">
          Alert solid info
          <Alert.CloseButton />
        </Alert>

        <Alert variant="solid" color="success">
          Alert solid success
          <Alert.CloseButton />
        </Alert>

        <Alert variant="solid" color="warning">
          Alert solid warning
          <Alert.CloseButton />
        </Alert>

        <Alert variant="solid" color="error">
          Alert solid error
          <Alert.CloseButton />
        </Alert>
      </div>

      <H3>Alerts with subtle colors</H3>
      <div className="flex w-full flex-col space-y-4">
        <Alert variant="subtle" color="info">
          Alert subtle info
          <Alert.CloseButton />
        </Alert>

        <Alert variant="subtle" color="success">
          Alert subtle success
          <Alert.CloseButton />
        </Alert>

        <Alert variant="subtle" color="warning">
          Alert subtle warning
          <Alert.CloseButton />
        </Alert>

        <Alert variant="subtle" color="error">
          Alert subtle error
          <Alert.CloseButton />
        </Alert>
      </div>

      <H3>Alerts with left accent colors</H3>
      <div className="flex w-full flex-col space-y-4">
        <Alert variant="left-accent" color="info">
          Alert left accent info
          <Alert.CloseButton />
        </Alert>

        <Alert variant="left-accent" color="success">
          Alert left accent success
          <Alert.CloseButton />
        </Alert>

        <Alert variant="left-accent" color="warning">
          Alert left accent warning
          <Alert.CloseButton />
        </Alert>

        <Alert variant="left-accent" color="error">
          Alert left accent error
          <Alert.CloseButton />
        </Alert>
      </div>
    </div>
  );
};
