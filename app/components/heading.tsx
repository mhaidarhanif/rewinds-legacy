import { FunctionComponent } from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export const H1: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h1 className="mt-2 mb-8 text-4xl font-black">{children}</h1>;
};

export const H2: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h2 className="mt-12 mb-6 text-2xl font-bold">{children}</h2>;
};

export const H3: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h3 className="mb-3 text-xl font-bold">{children}</h3>;
};

export const H4: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h4 className="mb-2 text-lg font-bold">{children}</h4>;
};

export const H5: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h5 className="text-md mb-1 font-bold">{children}</h5>;
};

export const H6: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h6 className="text-md mb-1 font-bold">{children}</h6>;
};
