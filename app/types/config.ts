import type { AnchorItems, LinkItems } from "~/types";

export type ConfigNavigation = Array<{
  name: string;
  links?: LinkItems;
  anchors?: AnchorItems;
}>;
