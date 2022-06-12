import {
  IconCalendar,
  IconCheck,
  IconCheckCircle,
  IconCircle,
  IconDarkTheme,
  IconDatabase,
  IconDev,
  IconDiscord,
  IconFunction,
  IconGitHub,
  IconKey,
  IconLightTheme,
  IconLinkedIn,
  IconMedium,
  IconMenu,
  IconMessage,
  IconProductHunt,
  IconStorage,
  IconTelegram,
  IconTimer,
  IconTwitter,
  IconWebsite,
  IconYouTube,
} from "~/libs";

import type { HTMLElementProps } from "~/types";

export { Icon as VechaiIcon } from "@vechaiui/react";

/**
 * Icon list mapping
 */

export const iconMaps = {
  // General
  check: <IconCheck />,
  "check-circle": <IconCheckCircle />,
  calendar: <IconCalendar />,
  circle: <IconCircle />,
  dark: <IconDarkTheme />,
  database: <IconDatabase />,
  function: <IconFunction />,
  key: <IconKey />,
  light: <IconLightTheme />,
  menu: <IconMenu />,
  message: <IconMessage />,
  storage: <IconStorage />,
  timer: <IconTimer />,
  website: <IconWebsite />,
  // External
  dev: <IconDev />,
  discord: <IconDiscord />,
  github: <IconGitHub />,
  linkedin: <IconLinkedIn />,
  medium: <IconMedium />,
  telegram: <IconTelegram />,
  twitter: <IconTwitter />,
  youtube: <IconYouTube />,
  producthunt: <IconProductHunt />,
  // Default
  default: <IconCircle />,
};

/**
 * Switch function to enable mapping
 */

const switchFunction = (lookupObject: any, defaultCase = "default") => {
  return (expression: string | number) => {
    return lookupObject[expression] || lookupObject[defaultCase];
  };
};

const iconSwitch = switchFunction(iconMaps, "default");

/**
 * Icon component
 */

interface IconProps {
  name: string;
}

export const Icon = ({ name }: IconProps) => {
  return iconSwitch(name);
};

/**
 * IconSpan component
 */

interface IconSpanProps extends HTMLElementProps {
  name: string;
}

export const IconSpan = ({ name, className }: IconSpanProps) => {
  return (
    <span className={className}>
      <Icon name={name} />
    </span>
  );
};
