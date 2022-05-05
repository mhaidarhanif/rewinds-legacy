import type { IToast } from '~/types';

export type ConfigApp = {
  theme: Theme;
  toast: IToast;
  notification: IToast;
};

export type Theme = {
  colorScheme: string;
  density: 'compact' | 'comfortable' | 'unset';
  radius: string;
  cursorPointer: boolean;
};

export type StackItem = {
  name: string;
  href: string;
  description?: string;
  subItems?: {
    name: string;
    href?: string;
    description?: string;
  }[];
};

export type ComponentItem = {
  name: string;
};

export type UtilityItem = {
  name: string;
};

export type ExternalLinkItem = {
  name: string;
  url: string;
  isEnabled?: boolean;
};
