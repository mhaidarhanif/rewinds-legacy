import { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-200/5">
      <div className="flex py-4">
        <p className="space-x-1">
          <span>&copy;</span>
          <span>{year}</span>
          <span>•</span>
          <a
            className="hover:underline"
            href="https://github.com/mhaidarhanif/remix-tailwind-starter-kit"
            target="_blank"
            rel="noreferrer"
          >
            <code>remix-tailwind-starter-kit</code>
          </a>
          <span>•</span>
          <a
            className="hover:underline"
            href="https://twitter.com/mhaidarhanif"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <span>•</span>
          <a
            className="hover:underline"
            href="https://github.com/mhaidarhanif"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
