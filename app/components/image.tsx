interface ImageProps {
  alt: string;
  src?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export const Image = ({ alt, src, height, width, className }: ImageProps) => {
  return (
    <img
      alt={alt}
      src={src}
      height={height}
      width={width}
      className={className}
    />
  );
};
