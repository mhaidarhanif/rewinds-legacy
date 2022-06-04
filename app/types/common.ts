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

export type RichText = {
  html?: string;
  markdown?: string;
  raw?: string;
  text?: string;
};

export type Article = {
  id: string;
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  content?: RichText;
  coverImage?: Asset;
};

export type Strings = Array<string>;
export type Numbers = Array<number>;
export type Booleans = Array<boolean>;
export type Currencies = Array<Currency>;
export type TextItems = Array<TextItem>;
export type LinkItems = Array<LinkItem>;
export type ExternalLinkItems = Array<ExternalLinkItem>;
export type Articles = Array<Article>;
