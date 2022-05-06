import { redirect } from '@remix-run/node';

import { configUrls } from '~/configs';

import type { LoaderFunction } from '~/types';

const url = configUrls.TWITTER_URL;

export const loader: LoaderFunction = async () => {
  return redirect(url);
};
