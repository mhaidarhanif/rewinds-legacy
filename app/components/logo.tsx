import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex items-center gap-1 text-2xl   sm:text-3xl">
      ⏪ <LogoSpan />
    </div>
  );
};

export const LogoSpan = () => {
  return (
    <span className="font-black tracking-tightest text-primary-500 transition-colors duration-300 hover:text-primary-700">
      Rewinds
    </span>
  );
};
