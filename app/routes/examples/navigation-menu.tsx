import { NavigationBarNavMenu } from "~/components";
import { Layout } from "~/layouts";

export default function ExampleNavigationMenu() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Navigation Menu</h1>
        <p>
          Complex navigation menu component with Radix UI. A collection of links
          for navigating websites.
        </p>
      </article>

      <article className="example">
        <nav className="navigation-bar">
          <NavigationBarNavMenu />
        </nav>
      </article>

      <article className="prose-config">
        <p>Features</p>
        <ul>
          <li>Can be controlled or uncontrolled.</li>
          <li>Flexible layout structure with managed tab focus.</li>
          <li>Supports submenus.</li>
          <li>Optional active item indicator.</li>
          <li>Full keyboard navigation.</li>
          <li>Exposes CSS variables for advanced animation.</li>
        </ul>
        <h2>Installation</h2>
        <pre>npm install @radix-ui/react-navigation-menu</pre>
      </article>
    </Layout>
  );
}
