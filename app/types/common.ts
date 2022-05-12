/**
 * Common Types
 * Used inside the LoaderData and ActionData types
 */

export type LinkItem = {
  to: string;
  text: string;
  isEnabled?: boolean;
};

export type LinkItems = Array<LinkItem>;

export type StackItem = {
  name: string;
  url: string;
  description?: string;
  subItems?: Array<{
    name: string;
    url?: string;
    description?: string;
  }>;
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
