export type Config = {
  theme: ThemeConfig;
};

export type ThemeConfig = {
  colorScheme: ThemeColorSchemeID;
  density: ThemeDensity;
  radius: string;
  cursorPointer: boolean;
};

export type ThemeColorSchemeID =
  | string
  | 'light'
  | 'dark'
  | 'cool'
  | 'midnight'
  | 'pale'
  | 'dawn'
  | 'bee'
  | 'swiss';

export type ThemeDensity = 'compact' | 'comfortable' | 'unset';
