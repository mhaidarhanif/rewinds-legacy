import { H1, H2, NavigationBarNavMenu, P, Pre } from '~/components';
import { Layout } from '~/layouts';

export default function ExampleNavigationMenuRoute() {
  return (
    <Layout>
      <article className="prose-config">
        <H1>Navigation Menu with Radix UI</H1>
        <P>A collection of links for navigating websites.</P>
        <P>Features:</P>
        <ul>
          <li>Can be controlled or uncontrolled.</li>
          <li>Flexible layout structure with managed tab focus.</li>
          <li>Supports submenus.</li>
          <li>Optional active item indicator.</li>
          <li>Full keyboard navigation.</li>
          <li>Exposes CSS variables for advanced animation.</li>
        </ul>
        <H2>Installation</H2>
        <Pre>npm install @radix-ui/react-navigation-menu</Pre>
      </article>

      <div className="mt-10">
        <nav className="navigation-bar">
          <NavigationBarNavMenu />
        </nav>
      </div>
    </Layout>
  );
}
