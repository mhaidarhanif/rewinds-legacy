import { VechaiProvider, extendTheme } from "@vechaiui/react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  configStyle,
  configFeatures,
  configAvailableThemes,
  configThemes,
} from "~/configs";
import { useFetcher } from "~/hooks";
import { useMediaQuery } from "~/libs";
import { isEnvProduction } from "~/utils";

import type { VechaiProviderProps } from "@vechaiui/react";
import type { SpecifiedTheme } from "~/types";

export type ThemeContextType = {
  colorScheme?: string;
  radius?: string;
  density?: VechaiProviderProps["density"];
  cursorPointer?: boolean;
  setColorScheme: (colorScheme: string) => void;
  setRadius: (radius: string) => void;
  setCursorPointer: (cursorPointer: boolean) => void;
  setDensity: (density: VechaiProviderProps["density"]) => void;
};

export const prefersLightMQ = "(prefers-color-scheme: light)";

export const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * ThemeProvider wrapper
 */
export function ThemeProvider({
  specifiedTheme = configStyle?.theme,
  children,
}: {
  specifiedTheme?: SpecifiedTheme;
  children: React.ReactNode;
}) {
  /**
   * WIP: Preferred Theme
   * Only Light and Dark for now
   * Because System appearance require to modify the ThemeSwitcher
   */

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  if (!isEnvProduction && configFeatures.console) {
    console.info({ prefersDarkMode });
  }

  /**
   * VechaiTheme
   */
  const [colorScheme, setColorScheme] = useState(specifiedTheme?.colorScheme);
  const [density, setDensity] = useState<VechaiProviderProps["density"]>(
    specifiedTheme?.density,
  );
  const [radius, setRadius] = useState(specifiedTheme?.radius);
  const [cursorPointer, setCursorPointer] = useState(
    specifiedTheme?.cursorPointer,
  );

  /**
   * VechaiProvider
   */
  const theme = useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? "pointer" : "default",
      rounded: radius,
      colorSchemes: configThemes,
    });
  }, [cursorPointer, radius]);

  /**
   * ThemeContext.Provider
   */
  const themeValue = useMemo(() => {
    return {
      colorScheme,
      density,
      radius,
      cursorPointer,
      setColorScheme,
      setCursorPointer,
      setDensity,
      setRadius,
    };
  }, [colorScheme, cursorPointer, density, radius]);

  /**
   * Persist theme into session cookie
   */
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);
  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!colorScheme) return;

    persistThemeRef.current.submit(
      {
        theme: JSON.stringify({
          colorScheme,
          density,
          radius,
          cursorPointer,
        }),
      },
      { action: "action/set-theme", method: "post" },
    );
  }, [colorScheme, cursorPointer, density, radius]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <VechaiProvider theme={theme} colorScheme={colorScheme} density={density}>
        {children}
      </VechaiProvider>
    </ThemeContext.Provider>
  );
}

/**
 * useTheme hook
 */
export const useTheme = () => {
  const theme = useContext(ThemeContext) || {
    colorScheme: configStyle?.theme.colorScheme,
    density: configStyle?.theme.density,
    radius: configStyle?.theme.radius,
    cursorPointer: configStyle?.theme.cursorPointer,
    setColorScheme: () => {
      return null;
    },
    setRadius: () => {
      return null;
    },
    setCursorPointer: () => {
      return null;
    },
    setDensity: () => {
      return null;
    },
  };

  const currentTheme = configAvailableThemes.find((item) => {
    return item.id === theme.colorScheme;
  });

  return {
    ...theme,
    ...currentTheme,
    isLight: currentTheme?.type === "light",
    isDark: currentTheme?.type === "dark",
  };
};

export default ThemeProvider;
