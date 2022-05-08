import { Footer, NavigationBar } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface LayoutGlobalProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutGlobal: FunctionComponent<LayoutGlobalProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar />

      <div className="container mx-auto flex-[1] px-4">
        <div className="flex justify-center">
          <main className={classx('mt-10 w-full max-w-[65ch]', className)}>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const Layout = LayoutGlobal;
