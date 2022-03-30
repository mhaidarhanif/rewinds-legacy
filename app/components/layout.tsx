import { FunctionComponent } from 'react';

import { Footer, Sidebar } from '~/components';
import { Intro } from '~/contents';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex scroll-smooth">
      <Sidebar />
      <div className="container ml-24 flex justify-center">
        <div id="main-wrapper">
          <main className="mt-8 max-w-[65ch]">
            <Intro />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
