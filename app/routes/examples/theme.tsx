import { ThemeSwitcher, ThemeToggle } from "~/components";
import { Layout } from "~/layouts";

export default function ExampleButton() {
  return (
    <Layout>
      <header>
        <h1>Example: Theme</h1>
        <p>Theme configuration with Vechai UI and cookie session in Remix.</p>
      </header>

      <article className="example">
        <div className="space-y-5">
          <h2>Theme Switcher</h2>
          <p>Most advanced settings.</p>
          <ThemeSwitcher variant="solid" />
        </div>

        <div className="space-y-5">
          <h2>Theme Toggle</h2>
          <p>Only between 2 color schemes.</p>
          <ThemeToggle />
        </div>

        <div className="space-y-5">
          <h2>Theme Button Group</h2>
          <ThemeSwitcher isGroup />
        </div>
      </article>
    </Layout>
  );
}
