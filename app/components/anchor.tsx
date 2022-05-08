import type { FunctionComponent } from 'react';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  'data-color'?: string;
}

export const Anchor: FunctionComponent<AnchorProps> = ({
  href,
  children,
  className,
  'data-color': dataColor,
}) => {
  return (
    <a
      href={href}
      className={className}
      data-color={dataColor}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
