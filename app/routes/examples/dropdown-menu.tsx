import { json } from "@remix-run/node";

import { DropdownMenu, NavigationBarDropdownMenu } from "~/components";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { MetaFunction, LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  return json({
    title: "Example: Dropdown Menu",
    description: "Dropdown Menu with Radix UI.",
  });
};

export const meta: MetaFunction = ({ data }) => {
  return createMetaData(data);
};

export default function ExampleDropdownMenu() {
  const { title, description } = useLoaderData();

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <article className="example">
        <h3>Navigation Bar Dropdown Menu</h3>
        <NavigationBarDropdownMenu />
      </article>

      <article className="example">
        <h3>Dropdown Menu from Tailwind CSS Radix</h3>
        <DropdownMenu />
      </article>

      <div className=" h-[600px]">
        <small>This is some space to show the popup menu.</small>
      </div>
    </Layout>
  );
}
