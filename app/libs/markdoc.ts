import Markdoc from "@markdoc/markdoc";
import React from "react";

import type { Node, Tag } from "@markdoc/markdoc";

export const markdocParse = (doc: string) => {
  const ast = Markdoc.parse(doc);
  return ast;
};

export const markdocTransform = (ast: Node) => {
  const content = Markdoc.transform(ast);
  return content;
};

export const markdocRenderHTML = (content: Tag) => {
  const html = Markdoc.renderers.html(content);
  return html;
};

export const markdocRenderReact = (content: Tag) => {
  const reactComponent = Markdoc.renderers.react(content, React);
  return reactComponent;
};
