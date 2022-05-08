import { classx } from '~/utils';

import type { FunctionComponent } from 'react';

interface PreProps {
  children: string;
}

export const Pre: FunctionComponent<PreProps> = ({ children }) => {
  return (
    <pre
      className={classx(
        'border-panel rounded-base bg-primary-900/10 p-2 ',
        'text-xs sm:text-sm md:text-base',
      )}
    >
      {JSON.stringify(children, null, 2)}
    </pre>
  );
};

interface PreDataProps {
  data: string;
}

export const PreData: FunctionComponent<PreDataProps> = ({ data }) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2 text-xs">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
