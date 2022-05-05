import { redirect } from 'remix';

import { configUrls } from '~/configs';

import type { LoaderFunction } from 'remix';

const url = configUrls.YOUTUBE_URL;

export const loader: LoaderFunction = async () => {
  return redirect(url);
};
