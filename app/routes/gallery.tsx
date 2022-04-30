import { H1, H2, Code, Image } from '~/components';
import { LayoutFull } from '~/layouts';

import type { SEOHandle } from '~/utils';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return [{ route: `/gallery`, priority: 0.7 }];
  },
};

export default function GalleryRoute() {
  return (
    <LayoutFull>
      <header className="my-12 flex flex-col md:items-center">
        <H1 className="text-6xl">Gallery</H1>
        <H2>
          Full width layout example with{' '}
          <Code className="text-inherit">{`<LayoutFull />`}</Code>
        </H2>
      </header>

      <Image
        className="blur-sm sepia"
        src="/assets/screenshots/home.png"
        alt="Home Page Screenshot"
      />
    </LayoutFull>
  );
}
