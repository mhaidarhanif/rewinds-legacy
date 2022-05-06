import { IconRewind } from '~/libs';

import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex items-center gap-1 text-2xl transition-[opacity] duration-300 hover:opacity-80 sm:text-3xl">
      <LogoIcon />
      <LogoSpan />
    </div>
  );
};

export const LogoIcon = () => {
  return <IconRewind size={32} weight="fill" className="fill-primary-500" />;
};

export const LogoSpan = () => {
  return (
    <span className="font-black tracking-tightest text-primary-500 ">
      Rewinds
    </span>
  );
};
