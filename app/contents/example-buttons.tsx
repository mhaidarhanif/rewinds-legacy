import { FunctionComponent } from 'react';

import { Button, ButtonGroup, H2 } from '~/components';

interface ExampleButtonsProps {}

export const ExampleButtons: FunctionComponent<ExampleButtonsProps> = () => {
  return (
    <article className="space-y-4">
      <H2>Buttons</H2>

      <div className="flex w-full flex-wrap gap-2 py-2">
        <Button>Normal</Button>
        <Button variant="solid" color="primary">
          Solid
        </Button>
        <Button variant="light" color="primary">
          Light
        </Button>
        <Button variant="ghost" color="primary">
          Ghost
        </Button>
        <Button variant="link" color="primary">
          Link
        </Button>
      </div>

      <div className="flex w-full flex-wrap gap-2 py-2">
        <Button size="xs" variant="solid" color="primary">
          Extra Small
        </Button>
        <Button size="sm" variant="solid" color="primary">
          Small
        </Button>
        <Button size="md" variant="solid" color="primary">
          Medium
        </Button>
        <Button size="lg" variant="solid" color="primary">
          Large
        </Button>
        <Button size="xl" variant="solid" color="primary">
          Extra Large
        </Button>
      </div>

      <div className="flex w-full flex-wrap gap-2 py-2">
        <Button variant="light" color="info">
          Info
        </Button>
        <Button variant="light" color="success">
          Success/Valid
        </Button>
        <Button variant="light" color="warning">
          Warning/Pending
        </Button>
        <Button variant="light" color="error">
          Error/Danger/Bug
        </Button>
      </div>

      <div className="flex w-full flex-wrap gap-2 py-2">
        <Button loading>Button</Button>
        <Button color="primary" loading loadingText="Loading...">
          Button
        </Button>
      </div>

      <div className="flex w-full flex-col space-y-4 py-2">
        <ButtonGroup>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup color="primary" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </div>
    </article>
  );
};
