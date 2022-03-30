import { FunctionComponent } from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

export const P: FunctionComponent<ParagraphProps> = ({ children }) => {
  return <p className="mt-4 mb-6">{children}</p>;
};
