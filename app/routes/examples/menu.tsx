import { json } from "@remix-run/node";

import { NavigationBarMenu } from "~/components";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { LoaderFunction, MetaFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  return json({
    title: "Example: Menu",
    description: "Menu with Headless UI.",
  });
};

export const meta: MetaFunction = ({ data }) => {
  return createMetaData(data);
};

export default function ExampleMenu() {
  const { title, description } = useLoaderData();

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <article className="example h-[600px]">
        <h3>Navigation Bar Menu</h3>
        <p>Note that the component doesn't have any collision detection.</p>
        <NavigationBarMenu />
      </article>
    </Layout>
  );
}
