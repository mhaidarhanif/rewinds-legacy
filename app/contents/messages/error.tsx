import { useNavigate } from "react-router-dom";
import { useParams } from "remix";

import { Button, ButtonGroup, ButtonLink } from "~/components";

/**
 * Message Not Found
 * Used in splat route $.tsx
 * Used inside ThemeProvider
 */

export const MessageErrorNotFound = () => {
  return (
    <>
      <MessageErrorNotFoundGoogle />
      <MessageBackReloadButtons isThemed />
    </>
  );
};

/**
 * Message Catch
 * Used in CatchBoundary
 */

interface MessageCatchProps {
  caught: any;
}

export const MessageCatch = ({ caught }: MessageCatchProps) => {
  return (
    <>
      <article className="prose-config">
        <h1 className="text-warning-500">What happened?</h1>
        <p>Hmm, something went wrong.</p>
      </article>

      <MessageBackReloadButtons />

      <article className="prose-config">
        <h3>Status Message</h3>
        <pre>
          {caught.status} {caught.statusText}
        </pre>
        <h3>Caught error data</h3>
        <pre>{JSON.stringify(caught, null, 2)}</pre>
      </article>
    </>
  );
};

/**
 * Message Error
 * Used in CatchBoundary
 */

interface MessageErrorProps {
  error: any;
}

export const MessageError = ({ error }: MessageErrorProps) => {
  return (
    <>
      <article className="prose-config">
        <h1 className="text-error-500">Error!</h1>
        <p>Sorry, something crashed and we didn't expect that to happen.</p>
      </article>

      <MessageBackReloadButtons />

      <article className="prose-config">
        <h3>Error message</h3>
        <pre>{error.message}</pre>
        <h3>Stack trace</h3>
        <pre>{error.stack as string}</pre>
      </article>
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
  const pathName = params["*"];

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

export const MessageBackReloadButtons = ({
  isThemed,
}: MessageBackReloadButtonsProps) => {
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    window.history.back();
  };

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
        <Button onClick={handleBackToPrevious}>Back to previous page</Button>
        <Button onClick={handleReload}>Reload page</Button>
      </ButtonGroup>
    );
  }

  // Without ThemeProvider, like in CatchBoundary and ErrorBoundary
  // Need to be plain, not using Vechai UI components
  return (
    <ButtonGroup>
      <a href="/" className="button solid">
        Back to home page
      </a>
      <button type="button" onClick={handleReload} className="button">
        Reload page
      </button>
    </ButtonGroup>
  );
};
