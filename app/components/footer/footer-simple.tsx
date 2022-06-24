import { ExternalLinks, FooterCopyrightText } from "~/components";

/**
 * Footer Simple
 *
 * Used with:
 * - ExternalLinks
 * - FooterCopyrightText
 */

export const FooterSimple = () => {
  return (
    <footer className="footer flex justify-center">
      <div className="flex flex-col items-center gap-2 py-8">
        <ExternalLinks />
        <FooterCopyrightText />
      </div>
    </footer>
  );
};
