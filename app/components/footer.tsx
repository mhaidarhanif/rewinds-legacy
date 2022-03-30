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
            href="https://twitter.com/mhaidarhanif"
            target="_blank"
            rel="noreferrer"
          >
            twitter.com/mhaidarhanif
          </a>
          <span>•</span>
          <a
            href="https://github.com/mhaidarhanif"
            target="_blank"
            rel="noreferrer"
          >
            github.com/mhaidarhanif
          </a>
        </p>
      </div>
    </footer>
  );
};
