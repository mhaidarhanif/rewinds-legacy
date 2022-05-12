import { json } from "@remix-run/node";

import { Code, Image } from "~/components";
import { dataImages } from "~/data";
import { useLoaderData } from "~/hooks";
import { Layout } from "~/layouts";

import type { LoaderFunction } from "~/types";

export const loader: LoaderFunction = async () => {
  return json({
    images: dataImages,
  });
};

export default function LayoutFullRoute() {
  const { images } = useLoaderData();

  return (
    <Layout variant="full">
      <article className="prose-config px-4">
        <h1>Layout: Full</h1>
        <p>
          Full width layout example without any padding with{" "}
          <Code>{`<Layout variant="full" />`}</Code>
        </p>
      </article>

      <article>
        {images.map((item: any) => {
          return <Image key={item.name} alt={item.name} src={item.url} />;
        })}
      </article>
    </Layout>
  );
}
