export type Config = {
  theme: Theme;
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
  subStacks?: {
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
