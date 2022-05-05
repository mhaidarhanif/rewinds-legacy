import { Footer, NavigationBar } from '~/components';
import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutWide: FunctionComponent<LayoutProps> = ({
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
