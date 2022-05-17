/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Anchor,
  Button,
  ExternalLinks,
  FooterCopyrightText,
  H4,
  Input,
  Logo,
  RemixForm,
  RemixLink,
} from "~/components";
import { configMeta, configNavigationSitemap, configStyle } from "~/configs";
import { classx, sleep } from "~/utils";

import type { HTMLElementProps } from "~/types";
import { useForm, useNotification, useState } from "~/hooks";

const date = new Date();
const year = date.getFullYear();

/**
 * Footer Complex
 *
 * Used with:
 * - Logo
 * - ExternalLinks
 * - FooterComplexFormSubscribe
 * - FooterComplexSitemap
 * - FooterComplexBottomTexts
 */

export const FooterComplex = () => {
  return (
    <footer className="footer footer-complex">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="space-y-4 text-neutral-900 dark:text-neutral-100">
            <RemixLink to="/" className="flex">
              <Logo />
            </RemixLink>
            <ExternalLinks />
          </div>
          <div className="container-active mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <FooterComplexFormSubscribe />
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

export const FooterComplexSitemap = () => {
  return (
    <>
      {configNavigationSitemap.map((item) => {
        return (
          <div
            key={item.name}
            className="col-span-1 border-t border-primary-300 pt-2 dark:border-primary-900 sm:col-span-1"
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

/**
 * Footer Complex Form Subscribe
 *
 * For now use react-hook-form, not Remix Form
 * Because this will be used in all routes
 * Still looking a better way
 */

export const FooterComplexFormSubscribe = () => {
  const [loading, setLoading] = useState(false);

  const notify = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    await sleep(1);
    notify({
      title: "Subscribed!",
      description: "Your email is now subscribed.",
      status: "success",
      position: configStyle.notification.position,
    });
    setLoading(false);
  };

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
