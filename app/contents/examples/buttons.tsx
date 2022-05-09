import { Button, ButtonGroup, H2, H3, RemixLink } from '~/components';
import { MessageBackReloadButtons } from '~/contents';

import type { FunctionComponent } from 'react';

interface ExampleButtonsProps {}

export const ExampleButtons: FunctionComponent<ExampleButtonsProps> = () => {
  return (
    <div className="space-y-4">
      <H2>Buttons</H2>

      <H3>Button Variant</H3>
      <ButtonGroup>
        <Button>Normal</Button>
        <Button color="primary">Primary</Button>
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
      </ButtonGroup>

      <H3>Button Size</H3>
      <ButtonGroup>
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
      </ButtonGroup>

      <H3>Button group</H3>
      <section className="flex w-full flex-col space-y-4 py-2">
        <ButtonGroup variant="solid" color="primary" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>

        <ButtonGroup attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </section>

      <H3>Custom color solid</H3>
      <ButtonGroup>
        <Button variant="solid" color="info">
          Info
        </Button>
        <Button variant="solid" color="success">
          Success/Valid
        </Button>
        <Button variant="solid" color="warning">
          Warning/Pending
        </Button>
        <Button variant="solid" color="error">
          Error/Danger/Bug
        </Button>
      </ButtonGroup>

      <H3>Custom color light</H3>
      <ButtonGroup>
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
      </ButtonGroup>

      <H3>Custom elements</H3>
      <ButtonGroup>
        <Button className="rounded-lg shadow-md shadow-primary-500/20">
          Vechai + Tailwind
        </Button>
        <button
          type="button"
          className="btn-solid btn btn-md rounded-xl uppercase tracking-wider"
          data-color="primary"
        >
          HTML Button
        </button>
        <a
          href="https://mhaidarhanif.com"
          target="_blank"
          rel="noreferrer"
          className="btn-solid btn btn-md rounded-2xl border-4 border-primary-100 hover:border-primary-200"
        >
          Anchor Button
        </a>
        <RemixLink
          to="/about"
          className="btn-solid btn btn-md rounded-full"
          data-color="primary"
        >
          Remix Link Button
        </RemixLink>
      </ButtonGroup>

      <H3>Loading state</H3>
      <ButtonGroup>
        <Button loading>Button</Button>
        <Button color="primary" loading loadingText="Loading...">
          Button
        </Button>
      </ButtonGroup>

      <H3>Buttons in Message: Back to home page / Reload page</H3>
      <MessageBackReloadButtons />
    </div>
  );
};
