import { json } from '@remix-run/node';

import { Code, Image } from '~/components';
import { dataImages } from '~/data';
import { useLoaderData } from '~/hooks';
import { LayoutFull } from '~/layouts';

import type { LoaderFunction } from '~/types';

export const loader: LoaderFunction = async () => {
  return json({
    images: dataImages,
  });
};

export default function LayoutFullRoute() {
  const { images } = useLoaderData();

  return (
    <LayoutFull>
      <article className="prose-config px-4">
        <h1>Layout: Full</h1>
        <p>
          Full width layout example without any padding with{' '}
          <Code className="text-inherit">{`<LayoutFull />`}</Code>
        </p>
      </article>

      <div>
        {images.map((item: any) => {
          return <Image key={item.name} alt={item.name} src={item.url} />;
        })}
      </div>
    </LayoutFull>
  );
}
