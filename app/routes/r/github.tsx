import { redirect } from 'remix';

import type { LoaderFunction } from 'remix';

const url = 'https://github.com/mhaidarhanif/rewinds';

export const loader: LoaderFunction = async () => {
  return redirect(url);
};
