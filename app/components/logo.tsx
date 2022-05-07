import { IconRewind } from '~/libs';

import type { FunctionComponent } from 'react';

interface LogoProps {}

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex items-center gap-1 text-3xl transition-[opacity] duration-300 hover:opacity-80">
      <LogoIcon />
      <LogoSpan />
    </div>
  );
};

export const LogoIcon = () => {
  return <IconRewind weight="fill" className="h-8 w-8 fill-primary-500" />;
};

export const LogoSpan = () => {
  return (
    <span className="font-black tracking-tightest text-primary-500 ">
      Rewinds
    </span>
  );
};
