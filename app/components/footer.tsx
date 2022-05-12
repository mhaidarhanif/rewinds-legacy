/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Anchor,
  Button,
  ExternalLinks,
  H4,
  Input,
  Logo,
  RemixForm,
  RemixLink,
} from "~/components";
import { configMeta, configNavigationSitemap } from "~/configs";
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

/**
 * Footer Complex
 *
 * Used with:
 * - ExternalLinks
 * - FooterCopyrightText
 */

export const FooterCommon = () => {
  return (
    <footer className="footer footer-common">
      <div className="flex flex-col items-center gap-2 py-8">
        <ExternalLinks />
        <FooterCopyrightText />
      </div>
    </footer>
  );
};

/**
 * Footer Complex
 *
 * Used with:
 * - Logo
 * - ExternalLinks
 * - FooterComplexFormNewsletter
 * - FooterComplexSitemap
 * - FooterComplexBottomTexts
 */

export const FooterComplex = () => {
  return (
    <footer className="footer footer-complex">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="space-y-4 text-neutral-900 dark:text-neutral-100">
            <RemixLink to="/">
              <Logo />
            </RemixLink>
            <ExternalLinks />
          </div>
          <div className="container-active mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <FooterComplexFormNewsletter />
            <FooterComplexSitemap />
          </div>
        </div>
        <div className="mt-12 border-t border-primary-300 pt-8 dark:border-primary-900">
          <FooterComplexBottomTexts />
        </div>
      </div>
    </footer>
  );
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

export const FooterComplexFormNewsletter = () => {
  return (
    <>
      <div className="col-span-2 space-y-2">
        <h2 className="text-2xl font-bold">Get some updates</h2>
        <p>{configMeta.description}</p>
      </div>

      <div className="col-span-2 sm:col-span-3 lg:flex lg:items-center">
        <RemixForm className="w-full max-w-[500px]">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="flex gap-2 sm:items-center">
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              size="lg"
            />
            <Button type="submit" size="lg" variant="solid" color="primary">
              Subscribe
            </Button>
          </div>
        </RemixForm>
      </div>
    </>
  );
};

export const FooterComplexSitemap = () => {
  return (
    <>
      {configNavigationSitemap.map((item) => {
        return (
          <div
            key={item.name}
            className="col-span-1 border-t border-primary-300 pt-6 dark:border-primary-900 sm:col-span-1"
          >
            <H4 className="font-bold">{item.name}</H4>
            <nav className="mt-6 flex flex-col space-y-2 text-sm">
              {item.links.map((subItem) => {
                return (
                  <RemixLink key={subItem.text} to={subItem.to}>
                    {subItem.text}
                  </RemixLink>
                );
              })}
            </nav>
          </div>
        );
      })}
    </>
  );
};

export const FooterComplexBottomTexts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <FooterCopyrightText className="text-center text-sm text-gray-400 lg:text-left" />

      <nav className="container-active flex justify-center gap-4 text-sm text-gray-400 lg:justify-end">
        <RemixLink to="/terms">Terms &amp; Conditions</RemixLink>
        <RemixLink to="/privacy">Privacy Policy</RemixLink>
        <RemixLink to="/cookies">Cookies</RemixLink>
      </nav>
    </div>
  );
};
