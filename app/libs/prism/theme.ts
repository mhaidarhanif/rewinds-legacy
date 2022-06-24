import PrismHighlight, {
  defaultProps as prismDefaultProps,
} from "prism-react-renderer";
import prismDefaultThemeDark from "prism-react-renderer/themes/nightOwl";
import prismDefaultThemeLight from "prism-react-renderer/themes/nightOwlLight";

import type {
  Language as PrismLanguage,
  PrismTheme,
} from "prism-react-renderer";

export {
  PrismHighlight,
  prismDefaultProps,
  prismDefaultThemeDark,
  prismDefaultThemeLight,
};

export type { PrismLanguage, PrismTheme };
