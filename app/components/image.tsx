import type { FunctionComponent } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: FunctionComponent<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
