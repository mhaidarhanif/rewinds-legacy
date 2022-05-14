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

export type Strings = Array<string>;
export type TextItems = Array<TextItem>;
export type LinkItems = Array<LinkItem>;
export type ExternalLinkItems = Array<ExternalLinkItem>;
