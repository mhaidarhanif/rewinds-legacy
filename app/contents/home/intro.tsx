import { LogoSpan, RemixLink } from "~/components";
import { classx } from "~/utils";

export const HomeIntro = () => {
  return (
    <div className="prose-config">
      <h1 className="tracking-tighter">
        <LogoSpan className={classx("bg-gradient-primary", "text-shimmer")} />
        <span>– Remix Tailwind Starter Kit</span>
      </h1>
      <p>
        Rewinds is a Remix starter kit with Tailwind family of libraries. Read
        more on <RemixLink to="/about">the about page</RemixLink>. Below are the
        quick examples on the UI components.
      </p>
    </div>
  );
};
