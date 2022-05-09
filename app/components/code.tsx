import { Code as VechaiCode } from '@vechaiui/react';

import { classx } from '~/utils';

import type { FunctionComponent } from 'react';
import type { CodeProps } from '~/types';

export const Code: FunctionComponent<CodeProps> = ({ children, className }) => {
  return (
    <VechaiCode className={classx('text-inherit', className)}>
      {children}
    </VechaiCode>
  );
};
