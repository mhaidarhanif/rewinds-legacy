/* eslint-disable react/no-array-index-key */
import Markdoc from "@markdoc/markdoc";
import React, { useEffect } from "react";

import { useState } from "~/hooks";
import {
  prismDefaultProps,
  prismDefaultThemeDark,
  prismDefaultThemeLight,
  PrismHighlight,
  useSsr,
} from "~/libs";

import type { PrismLanguage, PrismTheme } from "~/libs";
import type { Tag, RenderableTreeNode } from "~/types";

/**
 * `Fence` is similar with `PrismCodeHighlight`
 * In here `children` is being passed from Markdoc for the `code` prop
 */

interface FenceProps {
  theme?: PrismTheme;
  language: PrismLanguage;
  children: string;
  withLineNo: boolean;
}

export const Fence = ({
  children,
  language,
  theme = prismDefaultThemeDark,
  withLineNo = false,
}: FenceProps) => {
  /**
   * Temporary workaround only in the browser, not server
   * This is the current limitation because we cannot use `useTheme` yet
   * The issue is during `Markdoc.transform()`
   */

  const { isBrowser } = useSsr();
  const [currentTheme, setTheme] = useState("");

  useEffect(() => {
    if (isBrowser) {
      const htmlClass = document.getElementsByTagName("html")[0].className;
      const themeType = htmlClass === "dark" ? "dark" : "light";
      setTheme(themeType);
    }
  }, [isBrowser]);

  return (
    <PrismHighlight
      {...prismDefaultProps}
      language={language}
      code={children.trim()}
      theme={
        currentTheme === "light"
          ? prismDefaultThemeLight
          : prismDefaultThemeDark || theme
      }
    >
      {({ style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className="code-highlight rounded-base" style={style}>
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

/**
 * Markdoc Client
 *
 * Examples:
 * https://markdoc.io/docs/examples#syntax-highlighting
 */

const markdocComponents = {
  components: {
    Fence,
  },
};

export const markdocRenderHTML = (content: Tag) => {
  const html = Markdoc.renderers.html(content);
  return html;
};

export const markdocRenderReact = (content: RenderableTreeNode) => {
  const reactComponent = Markdoc.renderers.react(
    content,
    React,
    markdocComponents,
  );
  return reactComponent;
};
