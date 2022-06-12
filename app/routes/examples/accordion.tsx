import { json } from "@remix-run/node";

import { RadixAccordion } from "~/components";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { createMetaData } from "~/utils";

import type { MetaFunction, LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  return json({
    title: "Example: Accordion",
    description: "Accordion with Radix UI, Headless UI, and more.",
  });
};

export const meta: MetaFunction = ({ data }) => {
  return createMetaData(data);
};

export default function ExampleAccordion() {
  const { title, description } = useLoaderData();

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <article className="example">
        <h3>Radix UI: Accordion Multiple</h3>
        <p>Can open multiple items at a time.</p>
        <RadixAccordion type="multiple" />
      </article>

      <article className="example">
        <h3>Radix UI: Accordion Single</h3>
        <p>Only open one item at a time.</p>
        <RadixAccordion />
      </article>
    </Layout>
  );
}
