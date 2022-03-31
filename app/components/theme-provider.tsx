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

import { configDefaults, configThemes } from '~/configs';
import { ThemeConfig } from '~/types';

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

const ThemeContext = createContext<ThemeContextType | null>(null);

export const themes = [
  {
    name: 'Light',
    id: 'light',
    backgroundColor: configThemes.light.colors.bg.base,
    primaryColor: configThemes.light.colors.primary['500'],
  },
  {
    name: 'Dark',
    id: 'dark',
    backgroundColor: configThemes.dark.colors.bg.base,
    primaryColor: configThemes.dark.colors.primary['500'],
  },
  {
    name: 'Cool',
    id: 'cool',
    backgroundColor: configThemes.cool.colors.bg.base,
    primaryColor: configThemes.cool.colors.primary['500'],
  },
  {
    name: 'Midnight',
    id: 'midnight',
    backgroundColor: configThemes.midnight.colors.bg.base,
    primaryColor: configThemes.midnight.colors.primary['500'],
  },
  {
    name: 'Pale',
    id: 'pale',
    backgroundColor: configThemes.pale.colors.bg.base,
    primaryColor: configThemes.pale.colors.primary['500'],
  },
  {
    name: 'Dawn',
    id: 'dawn',
    backgroundColor: configThemes.dawn.colors.bg.base,
    primaryColor: configThemes.dawn.colors.primary['500'],
  },
  {
    name: 'Bee',
    id: 'bee',
    backgroundColor: configThemes.bee.colors.bg.base,
    primaryColor: configThemes.bee.colors.primary['500'],
  },
  {
    name: 'Swiss',
    id: 'swiss',
    backgroundColor: configThemes.swiss.colors.bg.base,
    primaryColor: configThemes.swiss.colors.primary['500'],
  },
];

export const radiusItems = [
  { name: 'none', value: 'none' },
  { name: 'sm', value: '0.125rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'xl', value: '0.75rem' },
  { name: 'full', value: '9999px' },
];

export function ThemeProvider({
  specifiedTheme = configDefaults?.theme,
  children,
}: {
  specifiedTheme: ThemeConfig;
  children: React.ReactNode;
}) {
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

  useEffect(() => {
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
      colorScheme: configDefaults?.theme.colorScheme,
      density: configDefaults?.theme.density,
      radius: configDefaults?.theme.radius,
      cursorPointer: configDefaults?.theme.cursorPointer,
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
