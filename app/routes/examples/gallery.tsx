import { json } from '@remix-run/node';

import { Code, Image } from '~/components';
import { dataImages } from '~/data';
import { useLoaderData } from '~/hooks';
import { LayoutFull } from '~/layouts';

import type { LoaderFunction } from '~/types';
import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/gallery`, priority: 0.7 }];
  },
};

export const loader: LoaderFunction = async () => {
  return json({
    images: dataImages,
  });
};

export default function GalleryRoute() {
  const { images } = useLoaderData();

  return (
    <LayoutFull>
      <header className="prose-config my-12 px-4">
        <h1>Gallery</h1>
        <p>
          Full width layout example with{' '}
          <Code className="text-inherit">{`<LayoutFull />`}</Code>
        </p>
      </header>

      <div>
        {images.map((item: any) => {
          return <Image key={item.name} alt={item.name} src={item.url} />;
        })}
      </div>
    </LayoutFull>
  );
}
