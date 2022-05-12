interface ParagraphProps {
  children: React.ReactNode;
}

export const P = ({ children }: ParagraphProps) => {
  return <p className="mt-4 mb-6">{children}</p>;
};
