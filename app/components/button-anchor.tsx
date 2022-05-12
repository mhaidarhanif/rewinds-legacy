import { classx } from "~/utils";

interface ButtonAnchorProps {
  href: string;
  children: React.ReactNode;
  color?: string;
  variant?: "solid" | "outline";
  className?: string;
}

export const ButtonAnchor = ({
  href,
  children,
  color = "primary",
  variant = "solid",
  className,
}: ButtonAnchorProps) => {
  return (
    <a
      href={href}
      data-color={color}
      className={classx(`btn-${variant} btn btn-md rounded-base`, className)}
    >
      {children}
    </a>
  );
};
