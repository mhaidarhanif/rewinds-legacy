import { FunctionComponent } from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export const H1: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h1 className="text-4xl mt-2 mb-8 font-black">{children}</h1>;
};

export const H2: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h2 className="text-xl mt-12 mb-6 font-bold">{children}</h2>;
};

export const H3: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h3 className="text-lg mb-3 font-bold">{children}</h3>;
};

export const H4: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h4 className="text-md mb-2 font-bold">{children}</h4>;
};

export const H5: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h5 className="text-md mb-1 font-bold">{children}</h5>;
};

export const H6: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h6 className="text-md mb-1 font-bold">{children}</h6>;
};
