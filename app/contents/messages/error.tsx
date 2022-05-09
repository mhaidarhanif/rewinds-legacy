import { useNavigate } from 'react-router-dom';
import { useParams } from 'remix';

import { Button, ButtonGroup, ButtonLink } from '~/components';

import type { FunctionComponent } from 'react';

/**
 * Message Not Found
 *
 * Used in splat route $.tsx
 * Used inside ThemeProvider
 */

interface MessageErrorNotFoundProps {}

export const MessageErrorNotFound: FunctionComponent<
  MessageErrorNotFoundProps
> = () => {
  return (
    <>
      <MessageErrorNotFoundGoogle />
      <MessageBackReloadButtons isThemed />
    </>
  );
};

/**
 * Message Error Not Found like Google
 *
 * https://google.com/404
 */

export const MessageErrorNotFoundGoogle = () => {
  const params = useParams();
  const pathName = params['*'];

  return (
    <article className="prose-config">
      <h1 className="text-info-500">404 Not Found</h1>
      <h2>Sorry, page is not exist or already gone</h2>
      <h3>
        The requested URL <b>"/{pathName}"</b> was not found
      </h3>
      <p>That’s all we know folks. :)</p>
    </article>
  );
};

/**
 * Message Back Reload Buttons
 *
 * Used for back to home page and reload page in:
 * - Splat route
 * - CatchBoundary
 * - ErrorBoundary
 */

interface MessageBackReloadButtonsProps {
  isThemed?: boolean;
}

export const MessageBackReloadButtons: FunctionComponent<
  MessageBackReloadButtonsProps
> = ({ isThemed }) => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0);
  };

  // Inside ThemeProvider
  // Can use Vechai UI components
  if (isThemed) {
    return (
      <ButtonGroup>
        <ButtonLink variant="solid" to="/">
          Back to home page
        </ButtonLink>
        <Button onClick={handleReload}>Reload page</Button>
      </ButtonGroup>
    );
  }

  // Without ThemeProvider, like in CatchBoundary and ErrorBoundary
  // Need to be plain, not using Vechai UI components
  return (
    <ButtonGroup>
      <a href="/" className="button">
        Back to home page
      </a>
      <button type="button" onClick={handleReload} className="button">
        Reload page
      </button>
    </ButtonGroup>
  );
};
