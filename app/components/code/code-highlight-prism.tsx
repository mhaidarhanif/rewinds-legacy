/* eslint-disable react/no-array-index-key */
import Highlight, { defaultProps } from "prism-react-renderer";
import themeNightOwl from "prism-react-renderer/themes/nightOwl";
import themeNightOwlLight from "prism-react-renderer/themes/nightOwlLight";

import { useTheme } from "~/components";
import { classx } from "~/utils";

import type { Language, PrismTheme } from "prism-react-renderer";

const defaultThemeDark = themeNightOwl;
const defaultThemeLight = themeNightOwlLight;

const defaultExampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

export const PrismCodeHighlight = ({
  theme,
  language = "jsx",
  code = defaultExampleCode,
}: PrismCodeHighlightProps) => {
  const { isLight } = useTheme();

  return (
    <Highlight
      {...defaultProps}
      theme={theme || isLight ? defaultThemeLight : defaultThemeDark}
      language={language}
      code={code}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={classx("code-highlight", className)} style={style}>
            {tokens.map((line, index) => {
              return (
                <div key={index} {...getLineProps({ line, key: index })}>
                  <span className="line-no">{index + 1}</span>
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
    </Highlight>
  );
};

interface PrismCodeHighlightProps {
  theme?: PrismTheme;
  language?: Language;
  code?: string;
}
