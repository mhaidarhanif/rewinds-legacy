import type { HTMLAnchorElementProps } from "~/types";

interface AnchorProps extends HTMLAnchorElementProps {
  "data-color"?: string;
}

export const Anchor = ({
  children,
  "data-color": dataColor,
  ...props
}: AnchorProps) => {
  return (
    <a data-color={dataColor} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
};
