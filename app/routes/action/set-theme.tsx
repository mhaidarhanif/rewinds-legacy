import { redirect } from "@remix-run/node";

import { actionSetTheme } from "~/features";

import type { ActionFunction } from "~/types";

export const action: ActionFunction = actionSetTheme;

export const loader = () => {
  return redirect("/");
};
