import {
  Button,
  ButtonAnchor,
  ButtonGroup,
  ButtonHTML,
  ButtonLink,
  RemixLink,
} from "~/components";
import { MessageBackReloadButtons } from "~/contents";

export const ExampleButtons = () => {
  return (
    <div className="space-y-10">
      <h2>Buttons</h2>

      <h3>Buttons with variant</h3>
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

      <h3>Buttons with different size</h3>
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

      <h3>Buttons with button group</h3>
      <section className="flex w-full flex-col space-y-5 py-2">
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

      <h3>Buttons with custom color variant solid</h3>
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

      <h3>Buttons with custom color variant light</h3>
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

      <h3>Buttons with custom elements</h3>

      <div className="space-y-5">
        <h4>
          Vechai <code>Button</code> component
        </h4>
        <ButtonGroup>
          <Button className="rounded-lg shadow-md shadow-primary-500/20">
            Vechai Button + Tailwind
          </Button>
        </ButtonGroup>

        <h4>
          <code>button</code> element
        </h4>
        <ButtonGroup>
          <Button className="rounded-lg shadow-md shadow-primary-500/20">
            Vechai Button + Tailwind
          </Button>
          <ButtonHTML>Button HTML</ButtonHTML>
          <button
            type="button"
            data-color="primary"
            className="btn-solid btn btn-md rounded-base"
          >
            1st Raw Button HTML
          </button>
          <button
            type="button"
            data-color="primary"
            className="btn-solid btn btn-md rounded-xl uppercase tracking-wider"
          >
            2nd Raw Button HTML
          </button>
        </ButtonGroup>

        <h4>
          <code>a</code> element
        </h4>
        <ButtonGroup>
          <ButtonAnchor href="https://mhaidarhanif.com">
            Button Anchor
          </ButtonAnchor>
          <a
            href="https://mhaidarhanif.com"
            target="_blank"
            rel="noreferrer"
            className="btn-solid btn btn-md rounded-2xl border-4 border-primary-100 hover:border-primary-200"
          >
            Raw Button Anchor
          </a>
        </ButtonGroup>

        <h4>
          <code>RemixLink</code> element
        </h4>
        <ButtonGroup>
          <ButtonLink to=".">Button Remix Link</ButtonLink>
          <RemixLink
            to="/about"
            className="btn-solid btn btn-md rounded-full"
            data-color="primary"
          >
            Raw Button Remix Link
          </RemixLink>
        </ButtonGroup>

        <h3>Buttons with loading state</h3>
        <ButtonGroup>
          <Button loading>Button</Button>
          <Button color="primary" loading loadingText="Loading...">
            Button
          </Button>
        </ButtonGroup>
      </div>

      <h3>Buttons for special case</h3>
      <MessageBackReloadButtons />
    </div>
  );
};
