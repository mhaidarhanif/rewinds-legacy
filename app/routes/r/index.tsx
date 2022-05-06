import { redirect } from '@remix-run/node';

import type { LoaderFunction } from '~/types';
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
