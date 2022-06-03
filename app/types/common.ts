/**
 * Common Types
 *
 * Used in:
 * - Config
 * - Data
 * - LoaderData
 * - ActionData
 */

export type TextItem = {
  text: string;
  neme: string;
};

export type LinkItem = {
  to: string;
  text: string;
  isEnabled?: boolean;
};

export type ExternalLinkItem = {
  name: string;
  url: string;
  isEnabled?: boolean;
};

export type StackItem = {
  name: string;
  url: string;
  description?: string;
};

export type StackItems = Array<
  StackItem & {
    subItems?: Array<StackItem>;
  }
>;

export type Asset = {
  id: string;
  url: string;
};

export type Article = {
  id: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: Asset;
};

export type Strings = Array<string>;
export type Numbers = Array<number>;
export type Booleans = Array<boolean>;
export type TextItems = Array<TextItem>;
export type LinkItems = Array<LinkItem>;
export type ExternalLinkItems = Array<ExternalLinkItem>;
export type Articles = Array<Articles>;
