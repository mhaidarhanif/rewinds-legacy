import { VechaiButtonIcon, Icon, useTheme } from "~/components";
import { configThemes } from "~/configs";

export const ThemeToggle = () => {
  const { isLight, setColorScheme } = useTheme();
  const lightTheme = configThemes.day.id;
  const darkTheme = configThemes.night.id;

  const toggleColorScheme = () => {
    setColorScheme(isLight ? darkTheme : lightTheme);
  };

  return (
    <VechaiButtonIcon
      color="primary"
      variant="solid"
      onClick={toggleColorScheme}
    >
      <Icon name={isLight ? "dark" : "light"} />
    </VechaiButtonIcon>
  );
};
