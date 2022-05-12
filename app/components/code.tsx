import { Code as VechaiCode } from '@vechaiui/react';

import { classx } from '~/utils';

import type { CodeProps } from '~/types';

export const Code = ({ children, className }: CodeProps) => {
  return (
    <VechaiCode className={classx('text-inherit', className)}>
      {children}
    </VechaiCode>
  );
};
