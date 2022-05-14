import { Layout } from "~/layouts";

import type { LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  throw new Error("System crashed!");
};

export default function DemoError() {
  return (
    <Layout>
      <h1>Demo Error</h1>
    </Layout>
  );
}
