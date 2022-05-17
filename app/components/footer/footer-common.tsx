import { ExternalLinks, FooterCopyrightText } from "~/components";

/**
 * Footer Common
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
