import {
  Anchor,
  ExternalLinks,
  FooterComplexFormSubscribe,
  FooterCopyrightText,
  Logo,
  RemixLink,
} from "~/components";
import { configNavigationSitemap } from "~/configs";

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
    <footer className="footer bg-secondary border-secondary border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="space-y-5 text-neutral-900 dark:text-neutral-100">
            <RemixLink prefetch="intent" to="/" className="flex">
              <Logo />
            </RemixLink>
            <ExternalLinks />
          </div>
          <div className="container-low mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
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
            <h4 className="font-bold uppercase tracking-wider">{item.name}</h4>
            <nav className="text-md mt-6 flex flex-col space-y-2">
              {item.items &&
                item.items.map((subItem) => {
                  if ("to" in subItem) {
                    return (
                      <RemixLink
                        prefetch="intent"
                        key={subItem.text}
                        to={subItem.to}
                      >
                        {subItem.text}
                      </RemixLink>
                    );
                  }

                  if ("href" in subItem) {
                    return (
                      <Anchor key={subItem.text} href={subItem.href}>
                        {subItem.text}
                      </Anchor>
                    );
                  }

                  return <span key={subItem["text"]}>{subItem["text"]}</span>;
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FooterCopyrightText className="text-left text-sm text-gray-400" />

      <nav className="container-low flex justify-start gap-4 text-sm text-gray-400 md:justify-end">
        <RemixLink prefetch="intent" to="/terms">
          Terms &amp; Conditions
        </RemixLink>
        <RemixLink prefetch="intent" to="/privacy">
          Privacy Policy
        </RemixLink>
        <RemixLink prefetch="intent" to="/cookies">
          Cookies
        </RemixLink>
      </nav>
    </div>
  );
};
