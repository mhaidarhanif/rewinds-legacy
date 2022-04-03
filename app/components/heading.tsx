import { FunctionComponent } from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export const H1: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h1 className="mt-0 mb-8 text-4xl font-extrabold">{children}</h1>;
};

export const H2: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h2 className="mt-12 mb-6 text-2xl font-bold">{children}</h2>;
};

export const H3: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h3 className="mb-3 text-xl font-semibold">{children}</h3>;
};

export const H4: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h4 className="mb-2 text-lg font-semibold">{children}</h4>;
};

export const H5: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h5 className="text-md mb-1 font-medium">{children}</h5>;
};

export const H6: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h6 className="text-md mb-1 font-medium">{children}</h6>;
};
