import { RemixLink } from '~/components';

export const Intro = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Rewinds, a Remix Tailwind Starter Kit</h1>
      <p>
        <b>Rewinds</b> is a Remix starter kit with Tailwind family of libraries.
        Read more on <RemixLink to="/about">the about page</RemixLink>. Below
        are the quick examples on the UI components.
      </p>
    </div>
  );
};
