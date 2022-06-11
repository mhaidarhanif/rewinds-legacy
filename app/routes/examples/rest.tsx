import { json } from "@remix-run/node";

import { Pre, RadixScrollArea } from "~/components";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";
import { axiosServer } from "~/libs";

import type { LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  const endpoint = process.env.REST_ENDPOINT as string;

  const fetchA = async () => {
    const response = await fetch(endpoint);
    const dataA = await response.json();
    return dataA;
  };

  const fetchB = async () => {
    const response = await axiosServer.get("/");
    const dataB = response.data;
    return dataB;
  };

  const [dataA, dataB] = await Promise.all([fetchA(), fetchB()]);

  return json({
    endpoint,
    dataA,
    dataB,
  });
};

export default function ExampleREST() {
  const data = useLoaderData();

  return (
    <Layout>
      <header>
        <h1>Example: REST API</h1>
        <p>
          Fetch data from REST API with <code>axios</code>.
        </p>
      </header>

      <article className="example">
        <Pre>{data.endpoint}</Pre>

        <h3>Scroll area with extra small pre text</h3>
        <RadixScrollArea>
          <Pre variant="xs">{data}</Pre>
        </RadixScrollArea>

        <h3>Extra large scroll area with medium pre text</h3>
        <RadixScrollArea variant="xl">
          <Pre variant="md">{data}</Pre>
        </RadixScrollArea>
      </article>
    </Layout>
  );
}
