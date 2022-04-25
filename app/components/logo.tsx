import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="hover:opacity flex items-center gap-1">
      <LogoSpan />
    </div>
  );
};

export const LogoSpan = () => {
  return (
    <span className="text-2xl font-black tracking-[-0.1em] text-primary-500 hover:text-primary-600 sm:text-3xl">
      Rewinds
    </span>
  );
};
