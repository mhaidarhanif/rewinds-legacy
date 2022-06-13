import { markdocRenderReact } from "~/libs";

import type { RenderableTreeNode } from "~/types";

interface RichTextMarkdocProps {
  content: RenderableTreeNode;
}

export const MarkdocRichText = ({ content }: RichTextMarkdocProps) => {
  return <>{markdocRenderReact(content)}</>;
};
