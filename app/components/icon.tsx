import {
  IconCircle,
  IconDark,
  IconDiscord,
  IconGitHub,
  IconLight,
  IconLinkedIn,
  IconMedium,
  IconMenu,
  IconTelegram,
  IconTwitter,
  IconWebsite,
  IconYouTube,
  IconDev,
} from "~/libs";

/**
 * Icon list mapping
 */

export const iconMaps = {
  // General
  circle: <IconCircle />,
  menu: <IconMenu />,
  website: <IconWebsite />,
  // Theme
  light: <IconLight />,
  dark: <IconDark />,
  // External
  telegram: <IconTelegram />,
  twitter: <IconTwitter />,
  discord: <IconDiscord />,
  medium: <IconMedium />,
  github: <IconGitHub />,
  youtube: <IconYouTube />,
  linkedin: <IconLinkedIn />,
  dev: <IconDev />,
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

interface IconSpanProps {
  name: string;
  // eslint-disable-next-line react/require-default-props
  className?: any;
}

export const IconSpan = ({ name, className }: IconSpanProps) => {
  return (
    <span className={className}>
      <Icon name={name} />
    </span>
  );
};
