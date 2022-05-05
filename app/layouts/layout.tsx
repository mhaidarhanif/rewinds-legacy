import { Footer, NavigationBar } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar />

      <div className="container mx-auto flex-[1] px-4">
        <div className="flex justify-center">
          <main className={classx('mt-20 w-full max-w-[65ch]', className)}>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const LayoutSpecial: FunctionComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex flex-col">
      <NavigationBar />

      <div className="flex justify-center">
        <main className={classx('mb-12 w-full max-w-[1440px]', className)}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};
