import { Avatar as VechaiAvatar } from "@vechaiui/react";

import { PropTypes } from "~/libs";

import type { VechaiAvatarProps } from "~/types";

export const AvatarGroup = ({
  size = "lg",
  max = 3,
  children,
}: AvatarGroupProps) => {
  return (
    <VechaiAvatar.Group size={size} max={max}>
      {children}
    </VechaiAvatar.Group>
  );
};

interface AvatarGroupProps extends VechaiAvatarProps {
  max?: number;
}

AvatarGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
