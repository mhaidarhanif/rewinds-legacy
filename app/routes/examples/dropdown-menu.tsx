import { DropdownMenu, NavigationBarDropdownMenu } from "~/components";
import { Layout } from "~/layouts";

export default function ExampleDropdownMenu() {
  return (
    <Layout>
      <article className="prose-config">
        <h1>Example: Dropdown Menu</h1>
        <p>Dropdown Menu with Radix UI.</p>
      </article>

      <article className="example">
        <div className="prose-config h-[600px]">
          <h2>Dropdown Menu</h2>
          <DropdownMenu />

          <h2>Navigation Bar Dropdown Menu</h2>
          <NavigationBarDropdownMenu />
        </div>
      </article>
    </Layout>
  );
}
