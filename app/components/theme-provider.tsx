import {
  VechaiProvider,
  extendTheme,
  VechaiProviderProps,
} from '@vechaiui/react';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useFetcher } from 'remix';

import { configApp, configThemes } from '~/configs';
import { Theme } from '~/types';

export type ThemeContextType = {
  colorScheme?: string;
  radius?: string;
  density?: VechaiProviderProps['density'];
  cursorPointer?: boolean;
  setColorScheme: (colorScheme: string) => void;
  setRadius: (radius: string) => void;
  setCursorPointer: (cursorPointer: boolean) => void;
  setDensity: (density: VechaiProviderProps['density']) => void;
};

export const prefersLightMQ = '(prefers-color-scheme: light)';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  specifiedTheme = configApp?.theme,
  children,
}: {
  specifiedTheme: Theme;
  children: React.ReactNode;
}) {
  /**
   * VechaiTheme
   */
  const [colorScheme, setColorScheme] = useState(specifiedTheme?.colorScheme);
  const [density, setDensity] = useState<VechaiProviderProps['density']>(
    specifiedTheme?.density
  );
  const [radius, setRadius] = useState(specifiedTheme?.radius);
  const [cursorPointer, setCursorPointer] = useState(
    specifiedTheme?.cursorPointer
  );

  /**
   * VechaiProvider
   */
  const theme = useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? 'pointer' : 'default',
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
      { action: 'action/set-theme', method: 'post' }
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

export const useTheme = (): ThemeContextType => {
  return (
    useContext(ThemeContext) || {
      colorScheme: configApp?.theme.colorScheme,
      density: configApp?.theme.density,
      radius: configApp?.theme.radius,
      cursorPointer: configApp?.theme.cursorPointer,
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
    }
  );
};

export default ThemeProvider;
