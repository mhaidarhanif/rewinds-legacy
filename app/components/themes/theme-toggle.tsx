import { ButtonIcon, Icon, useTheme } from "~/components";
import { configFeatures, configStyle, configThemes } from "~/configs";
import { useToast } from "~/hooks";

export const ThemeToggle = () => {
  const { isLight, setColorScheme } = useTheme();
  const lightTheme = configThemes.day.id;
  const darkTheme = configThemes.night.id;
  const toast = useToast();

  const toggleColorScheme = () => {
    setColorScheme(isLight ? darkTheme : lightTheme);

    if (configFeatures.toast) {
      toast({
        message: `Changed theme to ${isLight ? "Light" : "Dark"} mode`,
        position: configStyle.toast.position,
      });
    }
  };

  return (
    <ButtonIcon color="primary" variant="solid" onClick={toggleColorScheme}>
      <Icon name={isLight ? "dark" : "light"} />
    </ButtonIcon>
  );
};
