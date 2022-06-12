import { Avatar as VechaiAvatar } from "@vechaiui/react";

import { PropTypes } from "~/libs";

import type { VechaiAvatarProps } from "~/types";

export const Avatar = ({ src, name, size }: AvatarProps) => {
  return <VechaiAvatar src={src} name={name} size={size} />;
};

interface AvatarProps extends VechaiAvatarProps {}

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
};
