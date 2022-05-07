import { Anchor, ExternalLinks } from '~/components';

import type { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="flex flex-col items-center gap-2 py-8">
        <ExternalLinks />
        <p className="container-active space-x-1">
          <span>&copy;</span>
          <span>{year}</span>
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            Rewinds
          </Anchor>
          <span>by</span>
          <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor>
        </p>
      </div>
    </footer>
  );
};
