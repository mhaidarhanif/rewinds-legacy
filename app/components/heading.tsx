import { classx } from "~/utils";

const headingStyles = {
  h1: "text-5xl font-extrabold",
  h2: "text-2xl font-bold",
  h3: "text-xl font-semibold",
  h4: "text-lg font-semibold",
  h5: "text-md font-medium",
  h6: "text-md",
};

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: HeadingProps) => {
  return <h1 className={classx(headingStyles.h1, className)}>{children}</h1>;
};

export const H2 = ({ children, className }: HeadingProps) => {
  return <h2 className={classx(headingStyles.h2, className)}>{children}</h2>;
};

export const H3 = ({ children, className }: HeadingProps) => {
  return <h3 className={classx(headingStyles.h3, className)}>{children}</h3>;
};

export const H4 = ({ children, className }: HeadingProps) => {
  return <h4 className={classx(headingStyles.h4, className)}>{children}</h4>;
};

export const H5 = ({ children, className }: HeadingProps) => {
  return <h5 className={classx(headingStyles.h5, className)}>{children}</h5>;
};

export const H6 = ({ children, className }: HeadingProps) => {
  return <h6 className={classx(headingStyles.h6, className)}>{children}</h6>;
};
