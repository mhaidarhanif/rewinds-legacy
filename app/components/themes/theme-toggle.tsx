import { VechaiButtonIcon, Icon, useTheme } from "~/components";
import { configThemes } from "~/configs";

import type { VechaiButtonProps } from "~/types";

interface ThemeToggleProps {
  variant?: VechaiButtonProps["variant"];
}

export const ThemeToggle = ({ variant }: ThemeToggleProps) => {
  const { isLight, setColorScheme } = useTheme();
  const lightTheme = configThemes.day.id;
  const darkTheme = configThemes.night.id;

  const toggleColorScheme = () => {
    setColorScheme(isLight ? darkTheme : lightTheme);
  };

  return (
    <VechaiButtonIcon
      color="primary"
      variant={variant}
      onClick={toggleColorScheme}
    >
      <Icon name={isLight ? "dark" : "light"} />
    </VechaiButtonIcon>
  );
};
