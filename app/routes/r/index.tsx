import { redirect } from 'remix';

import type { LoaderFunction } from 'remix';
import type { SEOHandle } from '~/utils';

const url = '/';

export const handle: SEOHandle = {
  getSitemapEntries: () => {
    return null;
  },
};

export const loader: LoaderFunction = async () => {
  return redirect(url);
};
