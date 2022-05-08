import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutError: FunctionComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex justify-center p-2">
      <main className={classx('mt-20 w-full max-w-[65ch]', className)}>
        {children}
      </main>
    </div>
  );
};
