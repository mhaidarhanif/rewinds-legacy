interface ImageProps {
  alt: string;
  src?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const Image = ({
  alt,
  src,
  height,
  width,
  className,
  onClick,
  onKeyPress,
}: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      alt={alt}
      src={src}
      height={height}
      width={width}
      className={className}
      onClick={onClick}
      onKeyPress={onKeyPress}
    />
  );
};
