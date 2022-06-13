/* eslint-disable react/no-array-index-key */
import Markdoc from "@markdoc/markdoc";
import Highlight, { defaultProps } from "prism-react-renderer";
import themeNightOwl from "prism-react-renderer/themes/nightOwl";
import React from "react";

import type { Language } from "prism-react-renderer";
import type { Tag, RenderableTreeNode } from "~/types";

export const Fence = ({ language, children }: FenceProps) => {
  return (
    <Highlight
      {...defaultProps}
      theme={themeNightOwl}
      language={language}
      code={children.trim()}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className="code-highlight" style={style}>
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

interface FenceProps {
  language: Language;
  children: string;
}

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
