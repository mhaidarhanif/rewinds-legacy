import { Anchor, LogoSpan, RemixLink, ThemeSwitcher } from "~/components";
import { classx } from "~/utils";

/**
 * EDITME
 *
 * Introduce your product or project
 */

export const HomeIntro = () => {
  return (
    <header className="space-y-5">
      <div>
        <h1 className="tracking-tighter">
          <LogoSpan className={classx("bg-gradient-primary", "text-shimmer")} />
          <span>— Remix Tailwind Starter Kit</span>
        </h1>
        <p>
          Rewinds is a Remix starter kit with Tailwind family of libraries. You
          can read more on{" "}
          <RemixLink prefetch="intent" to="/about">
            the about page
          </RemixLink>
          . Below are the quick examples on the UI components. This template is
          originally made by{" "}
          <Anchor href="https://github.com/mhaidarhanif">M Haidar Hanif</Anchor>{" "}
          in conjunction with{" "}
          <Anchor href="https://catamyst.com">Catamyst</Anchor> and{" "}
          <Anchor href="https://a.catamyst.com/stack">its tech stack</Anchor>{" "}
          for various projects.
        </p>
      </div>

      <div className="space-y-3">
        <div className="font-tertiary">
          <p className="font-bold">Play around with them!</p>
          <p>Try the theme switcher here</p>
        </div>
        <ThemeSwitcher variant="solid" isGroup />
      </div>
    </header>
  );
};
