interface AnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  'data-color'?: string;
}

export const Anchor = ({
  href,
  children,
  className,
  'data-color': dataColor,
}: AnchorProps) => {
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
