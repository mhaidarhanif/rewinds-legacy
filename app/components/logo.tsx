import { configMainColor } from '~/configs';
import { IconRewind } from '~/libs';

import type { FunctionComponent } from 'react';

interface LogoProps {
  color?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({
  color = configMainColor,
}) => {
  return (
    <div className="flex items-center gap-1 text-2xl   sm:text-3xl">
      <IconRewind size={32} weight="fill" color={color} />
      <LogoSpan />
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
