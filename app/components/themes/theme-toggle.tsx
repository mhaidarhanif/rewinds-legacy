import { VechaiButtonIcon, Icon, useTheme } from "~/components";
import { configThemes } from "~/configs";

import type { VechaiButtonProps } from "~/types";

interface ThemeToggleProps {
  variant?: VechaiButtonProps["variant"];
}

export const ThemeToggle = ({ variant }: ThemeToggleProps) => {
  const { isLight, setColorScheme } = useTheme();
  const defaultThemeLight = configThemes.day.id;
  const defaultThemeDark = configThemes.night.id;

  const toggleColorScheme = () => {
    setColorScheme(isLight ? defaultThemeDark : defaultThemeLight);
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
