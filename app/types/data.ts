import type { StackItem } from '~/types';
import type { getEnv } from '~/utils';

export type LoaderDataSession = {
  user: any;
  theme: any;
  error: any;
  ENV: ReturnType<typeof getEnv>;
};

export type LoaderDataAbout = {
  mainStacks: StackItem[];
  referenceStacks: StackItem[];
  features: string[];
};
