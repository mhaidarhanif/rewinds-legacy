import { FunctionComponent } from 'react';

import { Footer, Navbar } from '~/components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex scroll-smooth px-4">
      <div className="container mx-auto">
        <Navbar />
        <div className="mt-12 flex justify-center">
          <main className="w-full max-w-[65ch]">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};
