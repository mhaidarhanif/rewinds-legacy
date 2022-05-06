import { H1, H2, Code, Image } from '~/components';
import { LayoutFull } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/gallery`, priority: 0.7 }];
  },
};

export default function GalleryRoute() {
  const dataImages = [
    {
      name: 'Wind Day',
      url: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Wind Emerald',
      url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Wind Amber',
      url: 'https://images.unsplash.com/photo-1466629437334-b4f6603563c5?auto=format&fit=crop&w=2078&q=80',
    },
  ];

  return (
    <LayoutFull>
      <header className="my-12 flex flex-col md:items-center">
        <H1 className="text-6xl">Gallery</H1>
        <H2>
          Full width layout example with{' '}
          <Code className="text-inherit">{`<LayoutFull />`}</Code>
        </H2>
      </header>

      <div>
        {dataImages.map((item) => {
          return <Image key={item.name} alt={item.name} src={item.url} />;
        })}
      </div>
    </LayoutFull>
  );
}
