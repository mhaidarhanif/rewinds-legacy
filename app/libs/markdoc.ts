import Markdoc from "@markdoc/markdoc";
import React from "react";

import type { Node, Tag, RenderableTreeNode } from "~/types";

/**
 * Markdoc
 *
 * Allow indentation:
 * https://markdoc.io/docs/faq#indentation
 */
export const markdocParse = (doc: string) => {
  const ast = Markdoc.parse(doc);
  return ast;

  // If want to use indent-based code blocks, not only fenced code blocks
  // const tokenizer = new Markdoc.Tokenizer({ allowIndentation: true });
  // const tokens = tokenizer.tokenize(doc);
  // const ast = Markdoc.parse(tokens);
  // return ast;
};

export const markdocTransform = (ast: Node) => {
  const content = Markdoc.transform(ast);
  return content;
};

export const markdocParseTransform = (doc: string) => {
  return markdocTransform(markdocParse(doc));
};

export const markdocRenderHTML = (content: Tag) => {
  const html = Markdoc.renderers.html(content);
  return html;
};

export const markdocRenderReact = (content: RenderableTreeNode) => {
  // console.log(content?.children[3]?.children);
  const reactComponent = Markdoc.renderers.react(content, React);
  return reactComponent;
};
