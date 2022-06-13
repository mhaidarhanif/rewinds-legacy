import Markdoc from "@markdoc/markdoc";

import type { Node } from "~/types";

/**
 * Markdoc Server
 *
 * Examples:
 * https://markdoc.io/docs/examples#syntax-highlighting
 *
 * Allow indentation:
 * https://markdoc.io/docs/faq#indentation
 */

const fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
      description:
        "The programming language of the code block. Place it after the backticks.",
    },
  },
};

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
  const content = Markdoc.transform(ast, {
    nodes: {
      fence,
    },
  });

  return content;
};

export const markdocParseTransform = (doc: string) => {
  return markdocTransform(markdocParse(doc));
};
