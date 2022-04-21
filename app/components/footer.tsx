import { Anchor } from '~/components';

import type { FunctionComponent } from 'react';

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
          <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor>
          <span>•</span>
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            <code>rewinds</code>
          </Anchor>
          <span>•</span>
          <Anchor href="https://twitter.com/mhaidarhanif">Twitter</Anchor>
          <span>•</span>
          <Anchor href="https://github.com/mhaidarhanif">GitHub</Anchor>
        </p>
      </div>
    </footer>
  );
};
