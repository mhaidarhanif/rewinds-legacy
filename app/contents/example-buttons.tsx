import { FunctionComponent } from 'react';

import { Button, ButtonGroup, H2, H3, RemixLink } from '~/components';

interface ExampleButtonsProps {}

export const ExampleButtons: FunctionComponent<ExampleButtonsProps> = () => {
  return (
    <div className="space-y-4">
      <H2>Buttons</H2>

      <section className="flex-section">
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
      </section>

      <H3>Different size</H3>

      <div className="flex-section">
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

      <H3>Loading state</H3>

      <section className="flex-section">
        <Button loading>Button</Button>
        <Button color="primary" loading loadingText="Loading...">
          Button
        </Button>
      </section>

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

      <section className="flex-section">
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
      </section>

      <H3>Custom color light</H3>

      <section className="flex-section">
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
      </section>

      <H3>Custom elements</H3>

      <section className="flex-section">
        <Button className="rounded-lg shadow-md shadow-primary-500/20">
          Vechai + Tailwind
        </Button>
        <button
          type="button"
          className="btn btn-md btn-light rounded-xl tracking-widest"
          data-color="primary"
        >
          HTML Button
        </button>
        <a
          href="https://rtsk.vercel.app"
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
      </section>
    </div>
  );
};
