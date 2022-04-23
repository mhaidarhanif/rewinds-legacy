import {
  // General
  FaCircle as CircleIcon,
  FaGlobe as WebsiteIcon,
  // Theme
  FaSun as DarkIcon,
  FaMoon as LightIcon,
  // Social media
  FaTelegram as TelegramIcon,
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
  FaMedium as MediumIcon,
  FaGithub as GitHubIcon,
  FaYoutube as YouTubeIcon,
  FaLinkedin as LinkedInIcon,
} from 'react-icons/fa';

import type { FunctionComponent } from 'react';

export const iconMaps = {
  // General
  circle: <CircleIcon />,
  website: <WebsiteIcon />,
  // Theme
  light: <LightIcon />,
  dark: <DarkIcon />,
  // Social media
  telegram: <TelegramIcon />,
  twitter: <TwitterIcon />,
  discord: <DiscordIcon />,
  medium: <MediumIcon />,
  github: <GitHubIcon />,
  youtube: <YouTubeIcon />,
  linkedin: <LinkedInIcon />,
  // Default
  default: <CircleIcon />,
};

const switchFn = (lookupObject: any, defaultCase = '_default') => {
  return (expression: string | number) => {
    return lookupObject[expression] || lookupObject[defaultCase];
  };
};

const iconSwitch = switchFn(iconMaps, 'default');

interface IconProps {
  name: string;
}

interface IconSpanProps {
  name: string;
  // eslint-disable-next-line react/require-default-props
  className?: any;
}

export const Icon: FunctionComponent<IconProps> = ({ name }) => {
  return iconSwitch(name);
};

export const IconSpan: FunctionComponent<IconSpanProps> = ({
  name,
  className,
}) => {
  return (
    <span className={className}>
      <Icon name={name} />
    </span>
  );
};
