import { LogoSpan, RemixLink } from '~/components';

export const HomeIntro = () => {
  return (
    <div className="prose-config">
      <h1 className="tracking-tighter">
        <LogoSpan className="text-shimmer bg-gradient-primary" />
        <span> – Remix Tailwind Starter Kit</span>
      </h1>
      <p>
        <b className="text-primary-500">Rewinds</b> is a Remix starter kit with
        Tailwind family of libraries. Read more on{' '}
        <RemixLink to="/about">the about page</RemixLink>. Below are the quick
        examples on the UI components.
      </p>
    </div>
  );
};
