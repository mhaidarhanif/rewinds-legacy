import { Footer, NavigationBar } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutFull: FunctionComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationBar />

      <div className="flex flex-[1] justify-center">
        <main className={classx('w-full', className)}>{children}</main>
      </div>

      <Footer />
    </div>
  );
};
