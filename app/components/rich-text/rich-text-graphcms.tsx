import { RichText } from "@graphcms/rich-text-react-renderer";

import type { RichTextProps } from "@graphcms/rich-text-react-renderer";

interface GraphCMSRichTextProps extends RichTextProps {}

export const GraphCMSRichText = ({ content }: GraphCMSRichTextProps) => {
  return <RichText content={content} />;
};
