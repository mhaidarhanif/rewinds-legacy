import type { FunctionComponent } from 'react';

interface ImageProps {
  alt: string;
  src?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  alt,
  src,
  height,
  width,
  className,
}) => {
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
