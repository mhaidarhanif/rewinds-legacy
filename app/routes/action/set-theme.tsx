import { redirect } from 'remix';

import { actionSetTheme } from '~/features';

import type { ActionFunction } from 'remix';

export const action: ActionFunction = actionSetTheme;

export const loader = () => {
  return redirect('/');
};
