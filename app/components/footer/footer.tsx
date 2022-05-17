import { FooterCommon, FooterComplex } from "~/components";
import { configMeta } from "~/configs";
import { Anchor } from "~/components";
import { classx } from "~/utils";

import type { HTMLElementProps } from "~/types";

const date = new Date();
const year = date.getFullYear();

/**
 * Footer with variants
 */

interface FooterProps {
  variant?: "common" | "complex";
}

export const Footer = ({ variant = "complex" }: FooterProps) => {
  if (variant === "common") {
    return <FooterCommon />;
  }

  if (variant === "complex") {
    return <FooterComplex />;
  }

  return <footer className="footer-none">{configMeta.name}</footer>;
};

export const FooterCopyrightText = ({ className }: HTMLElementProps) => {
  return (
    <p className={classx("container-active space-x-1 space-y-1", className)}>
      <span>&copy;</span>
      <span>{year}</span>
      <Anchor href={configMeta.url}>{configMeta.name}</Anchor>
      <span>by</span>
      <Anchor href={configMeta.author.url}>{configMeta.author.name}</Anchor>
    </p>
  );
};
