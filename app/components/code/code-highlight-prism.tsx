/* eslint-disable react/no-array-index-key */

import { useTheme } from "~/components";
import {
  prismDefaultExampleCodeReact,
  prismDefaultProps,
  prismDefaultThemeDark,
  prismDefaultThemeLight,
  PrismHighlight,
} from "~/libs";
import { classx } from "~/utils";

import type { PrismTheme, PrismLanguage } from "~/libs";

/**
 * Using `prism-react-renderer`
 */

interface PrismCodeHighlightProps {
  children?: string;
  code?: string;
  theme?: PrismTheme;
  language?: PrismLanguage;
  withLineNo?: boolean;
}

export const PrismCodeHighlight = ({
  theme,
  language = "jsx",
  withLineNo = false,
  code = prismDefaultExampleCodeReact,
}: PrismCodeHighlightProps) => {
  const { isLight } = useTheme();

  return (
    <PrismHighlight
      {...prismDefaultProps}
      language={language}
      code={code}
      theme={isLight ? prismDefaultThemeLight : prismDefaultThemeDark || theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={classx("code-highlight rounded-base", className)}
            style={style}
          >
            {tokens.map((line, index) => {
              return (
                <div key={index} {...getLineProps({ line, key: index })}>
                  {withLineNo && <span className="line-no">{index + 1}</span>}
                  <span className="line-content">
                    {line.map((token, key) => {
                      return (
                        <span key={key} {...getTokenProps({ token, key })} />
                      );
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        );
      }}
    </PrismHighlight>
  );
};
