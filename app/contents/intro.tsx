import { Anchor } from '~/components';

export const Intro = () => {
  return (
    <div className="prose dark:prose-invert">
      <h1>Rewinds, a Remix Tailwind Starter Kit</h1>
      <p>
        <b>Rewinds</b> is a Remix starter kit with Tailwind family of libraries.
        Made by <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor>{' '}
        (<Anchor href="https://github.com/mhaidarhanif">@mhaidarhanif</Anchor>).
      </p>
      <p>
        The goal is to have several examples and demos to combine the best
        Tailwind-related ecosystem such as Tailwind CSS v3, Tailwind UI,
        Headless UI, Radix UI, Vechai UI, and more.
      </p>
    </div>
  );
};
