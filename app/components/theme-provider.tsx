import {
  VechaiProvider,
  extendTheme,
  VechaiProviderProps,
} from '@vechaiui/react';
import { createContext, useContext, useMemo, useState } from 'react';

import { configDefaults } from '~/configs';
import { light, dark, midnight, pale, dawn, bee, cool, swiss } from '~/utils';

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
    backgroundColor: light.colors.bg.base,
    primaryColor: light.colors.primary['500'],
  },
  {
    name: 'Dark',
    id: 'dark',
    backgroundColor: dark.colors.bg.base,
    primaryColor: dark.colors.primary['500'],
  },
  {
    name: 'Cool',
    id: 'cool',
    backgroundColor: cool.colors.bg.base,
    primaryColor: cool.colors.primary['500'],
  },
  {
    name: 'Midnight',
    id: 'midnight',
    backgroundColor: midnight.colors.bg.base,
    primaryColor: midnight.colors.primary['500'],
  },
  {
    name: 'Pale',
    id: 'pale',
    backgroundColor: pale.colors.bg.base,
    primaryColor: pale.colors.primary['500'],
  },
  {
    name: 'Dawn',
    id: 'dawn',
    backgroundColor: dawn.colors.bg.base,
    primaryColor: dawn.colors.primary['500'],
  },
  {
    name: 'Bee',
    id: 'bee',
    backgroundColor: bee.colors.bg.base,
    primaryColor: bee.colors.primary['500'],
  },
  {
    name: 'Swiss',
    id: 'swiss',
    backgroundColor: swiss.colors.bg.base,
    primaryColor: swiss.colors.primary['500'],
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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [cursorPointer, setCursorPointer] = useState(true);
  const [radius, setRadius] = useState(radiusItems[2].value);
  const [colorScheme, setColorScheme] = useState(configDefaults.colorScheme);
  const [density, setDensity] =
    useState<VechaiProviderProps['density']>('comfortable');

  const theme = useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? 'pointer' : 'default',
      rounded: radius,
      colorSchemes: {
        light,
        dark,
        midnight,
        pale,
        dawn,
        bee,
        swiss,
        cool,
      },
    });
  }, [cursorPointer, radius]);

  const themeValue = useMemo(() => {
    return {
      colorScheme,
      cursorPointer,
      density,
      radius,
      setColorScheme,
      setCursorPointer,
      setDensity,
      setRadius,
    };
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
      colorScheme: 'light',
      radius: '0.375rem',
      cursorPointer: false,
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
