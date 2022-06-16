import type { dayjs } from "~/libs";

/**
 * Common Types
 *
 * Used in:
 * - Config
 * - Data
 * - LoaderData
 * - ActionData
 */

export type DateTime = string | number | Date | null | undefined | dayjs.Dayjs;

export type Locale = string | "en" | "fr";

export type CurrencySymbol =
  | "USD"
  | "EUR"
  | "GBP"
  | "CAD"
  | "SGD"
  | "MYR"
  | "IDR";

export type Currency = {
  symbol: CurrencySymbol;
  name: string;
};

export type TextItem = {
  text: string;
};

export type LinkItem = {
  text: string;
  to: string;
  isEnabled?: boolean;
  isDisabled?: boolean;
};

export type AnchorItem = {
  text: string;
  href: string;
  isEnabled?: boolean;
  isDisabled?: boolean;
};

export type LinkOrAnchorItem = LinkItem | AnchorItem;
export type LinkAndAnchorItem = LinkItem & AnchorItem;

export type ExternalLinkItem = {
  slug: string;
  name: string;
  url: string;
  isEnabled?: boolean;
  isDisabled?: boolean;
};

export type ConfigNavigation = Array<{
  name: string;
  items?: LinkOrAnchorItems;
}>;

export type StackItem = {
  url: string;
  name: string;
  isChecked?: boolean;
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

export type RichText = {
  markdown?: string;
  html?: string;
  text?: string;
  raw?: any;
};

export type Article = {
  id: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: Asset;
  content?: RichText;
  markdown?: string;
  authors?: Array<Author>;
};

export type Author = {
  id?: string;
  name?: string;
  title?: string;
  bio?: string;
  picture?: Asset;
  articles?: Array<Article>;
};

export type UserInfo = {
  email?: string | null;
  firstName?: string | null;
};

export type Strings = Array<string>;
export type Numbers = Array<number>;
export type Booleans = Array<boolean>;
export type Currencies = Array<Currency>;
export type TextItems = Array<TextItem>;
export type LinkItems = Array<LinkItem>;
export type AnchorItems = Array<AnchorItem>;
export type LinkOrAnchorItems = Array<LinkOrAnchorItem>;
export type LinkAndAnchorItems = Array<LinkAndAnchorItem>;
export type ExternalLinkItems = Array<ExternalLinkItem>;
export type Articles = Array<Article>;
