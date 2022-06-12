import { configCustomColors } from "~/configs";

import type { VechaiColorScheme } from "~/types";

const colors = require("tailwindcss/colors");

/**
 * Config Themes
 * Based on Vechai UI
 *
 * - VechaiColorScheme objects
 * - Exported object of VechaiColorScheme objects, used in the ThemeProvider
 * - Array of available themes, used in the ThemeSwitcher
 */

export const day: VechaiColorScheme = {
  id: "day",
  type: "light",
  colors: {
    primary: colors.sky,
    neutral: colors.slate,
    bg: { base: colors.slate["100"], fill: colors.slate["100"] },
    text: { foreground: colors.slate["900"], muted: colors.slate["700"] },
  },
};

export const wind: VechaiColorScheme = {
  id: "wind",
  type: "light",
  colors: {
    primary: colors.cyan,
    neutral: colors.gray,
    bg: { base: colors.gray["100"], fill: colors.gray["100"] },
    text: { foreground: colors.gray["900"], muted: colors.gray["700"] },
  },
};

export const rose: VechaiColorScheme = {
  id: "rose",
  type: "light",
  colors: {
    primary: colors.rose,
    neutral: colors.stone,
    bg: { base: colors.stone["100"], fill: colors.stone["100"] },
    text: { foreground: colors.stone["900"], muted: colors.stone["700"] },
  },
};

export const teal: VechaiColorScheme = {
  id: "teal",
  type: "light",
  colors: {
    primary: colors.teal,
    neutral: colors.gray,
    bg: { base: colors.gray["100"], fill: colors.gray["100"] },
    text: { foreground: colors.gray["900"], muted: colors.gray["700"] },
  },
};

export const amber: VechaiColorScheme = {
  id: "amber",
  type: "light",
  colors: {
    primary: colors.amber,
    neutral: colors.stone,
    bg: { base: colors.stone["100"], fill: colors.stone["100"] },
    text: { foreground: colors.stone["900"], muted: colors.stone["700"] },
  },
};

export const ash: VechaiColorScheme = {
  id: "ash",
  type: "light",
  colors: {
    primary: colors.indigo,
    neutral: colors.slate,
    bg: {
      base: colors.slate["100"],
      fill: colors.slate["100"],
    },
    text: {
      foreground: colors.slate["900"],
      muted: colors.slate["700"],
    },
  },
};

export const silver: VechaiColorScheme = {
  id: "silver",
  type: "light",
  colors: {
    primary: configCustomColors.silver,
    neutral: configCustomColors.silver,
    bg: {
      base: configCustomColors.silver["100"],
      fill: configCustomColors.silver["200"],
    },
    text: {
      foreground: configCustomColors.silver["900"],
      muted: configCustomColors.silver["700"],
    },
  },
};

export const white: VechaiColorScheme = {
  id: "white",
  type: "light",
  colors: {
    primary: configCustomColors.black,
    neutral: configCustomColors.white,
    bg: {
      base: configCustomColors.white["100"],
      fill: configCustomColors.white["200"],
    },
    text: {
      foreground: configCustomColors.white["900"],
      muted: configCustomColors.white["700"],
    },
  },
};

export const night: VechaiColorScheme = {
  id: "night",
  type: "dark",
  colors: {
    primary: colors.sky,
    neutral: colors.gray,
    bg: { base: colors.gray["900"], fill: colors.gray["800"] },
    text: { foreground: colors.gray["100"], muted: colors.gray["300"] },
  },
};

export const cool: VechaiColorScheme = {
  id: "cool",
  type: "dark",
  colors: {
    primary: colors.cyan,
    neutral: colors.slate,
    bg: { base: colors.slate["900"], fill: colors.slate["900"] },
    text: { foreground: colors.slate["100"], muted: colors.slate["300"] },
  },
};

export const midnight: VechaiColorScheme = {
  id: "midnight",
  type: "dark",
  colors: {
    primary: colors.rose,
    neutral: colors.neutral,
    bg: { base: colors.neutral["900"], fill: colors.neutral["900"] },
    text: { foreground: colors.neutral["100"], muted: colors.neutral["300"] },
  },
};

export const terminal: VechaiColorScheme = {
  id: "terminal",
  type: "dark",
  colors: {
    primary: colors.teal,
    neutral: colors.gray,
    bg: { base: colors.gray["900"], fill: colors.gray["900"] },
    text: { foreground: colors.gray["100"], muted: colors.gray["300"] },
  },
};

export const pale: VechaiColorScheme = {
  id: "pale",
  type: "dark",
  colors: {
    primary: colors.violet,
    neutral: colors.slate,
    bg: { base: colors.slate["900"], fill: colors.slate["800"] },
    text: { foreground: colors.slate["100"], muted: colors.slate["300"] },
  },
};

export const dawn: VechaiColorScheme = {
  id: "dawn",
  type: "dark",
  colors: {
    primary: colors.pink,
    neutral: configCustomColors.dawn,
    bg: {
      base: configCustomColors.dawn["900"],
      fill: configCustomColors.dawn["800"],
    },
    text: {
      foreground: configCustomColors.dawn["100"],
      muted: configCustomColors.dawn["300"],
    },
  },
};

export const pebble: VechaiColorScheme = {
  id: "pebble",
  type: "dark",
  colors: {
    primary: configCustomColors.silver,
    neutral: configCustomColors.silver,
    bg: {
      base: configCustomColors.silver["900"],
      fill: configCustomColors.silver["800"],
    },
    text: {
      foreground: configCustomColors.silver["100"],
      muted: configCustomColors.silver["300"],
    },
  },
};

export const black: VechaiColorScheme = {
  id: "black",
  type: "dark",
  colors: {
    primary: configCustomColors.white,
    neutral: configCustomColors.black,
    bg: {
      base: configCustomColors.black["900"],
      fill: configCustomColors.black["600"],
    },
    text: {
      foreground: configCustomColors.black["100"],
      muted: configCustomColors.black["300"],
    },
  },
};

/**
 * VechaiSpecifiedTheme Provider colors data
 */
export const configThemes = {
  // Light
  day,
  teal,
  wind,
  rose,
  amber,
  ash,
  silver,
  white,

  // Dark
  night,
  terminal,
  cool,
  midnight,
  dawn,
  pale,
  pebble,
  black,
};

/**
 * Theme Switcher buttons
 */
export const configAvailableThemes = [
  // Light
  {
    name: "Day",
    id: "day",
    type: "light",
    primaryColor: configThemes.day.colors.primary["500"],
    backgroundColor: configThemes.day.colors.bg.base,
  },
  {
    name: "Teal",
    id: "teal",
    type: "light",
    primaryColor: configThemes.teal.colors.primary["500"],
    backgroundColor: configThemes.teal.colors.bg.base,
  },
  {
    name: "Wind",
    id: "wind",
    type: "light",
    primaryColor: configThemes.wind.colors.primary["500"],
    backgroundColor: configThemes.wind.colors.bg.base,
  },
  {
    name: "Rose",
    id: "rose",
    type: "light",
    primaryColor: configThemes.rose.colors.primary["500"],
    backgroundColor: configThemes.rose.colors.bg.base,
  },
  {
    name: "Amber",
    id: "amber",
    type: "light",
    primaryColor: configThemes.amber.colors.primary["500"],
    backgroundColor: configThemes.amber.colors.bg.base,
  },
  {
    name: "Ash",
    id: "ash",
    type: "light",
    primaryColor: configThemes.ash.colors.primary["500"],
    backgroundColor: configThemes.ash.colors.bg.base,
  },
  {
    name: "Silver",
    id: "silver",
    type: "light",
    primaryColor: configThemes.silver.colors.primary["500"],
    backgroundColor: configThemes.silver.colors.bg.base,
  },
  {
    name: "White",
    id: "white",
    type: "light",
    primaryColor: configThemes.white.colors.primary["500"],
    backgroundColor: configThemes.white.colors.bg.base,
  },

  // Dark
  {
    name: "Night",
    id: "night",
    type: "dark",
    primaryColor: configThemes.night.colors.primary["500"],
    backgroundColor: configThemes.night.colors.bg.base,
  },
  {
    name: "Terminal",
    id: "terminal",
    type: "dark",
    primaryColor: configThemes.terminal.colors.primary["500"],
    backgroundColor: configThemes.terminal.colors.bg.base,
  },
  {
    name: "Cool",
    id: "cool",
    type: "dark",
    primaryColor: configThemes.cool.colors.primary["500"],
    backgroundColor: configThemes.cool.colors.bg.base,
  },
  {
    name: "Midnight",
    id: "midnight",
    type: "dark",
    primaryColor: configThemes.midnight.colors.primary["500"],
    backgroundColor: configThemes.midnight.colors.bg.base,
  },
  {
    name: "Dawn",
    id: "dawn",
    type: "dark",
    primaryColor: configThemes.dawn.colors.primary["500"],
    backgroundColor: configThemes.dawn.colors.bg.base,
  },
  {
    name: "Pale",
    id: "pale",
    type: "dark",
    primaryColor: configThemes.pale.colors.primary["500"],
    backgroundColor: configThemes.pale.colors.bg.base,
  },
  {
    name: "Pebble",
    id: "pebble",
    type: "dark",
    primaryColor: configThemes.pebble.colors.primary["500"],
    backgroundColor: configThemes.pebble.colors.bg.base,
  },
  {
    name: "Black",
    id: "black",
    type: "light",
    primaryColor: configThemes.black.colors.primary["500"],
    backgroundColor: configThemes.black.colors.bg.base,
  },
];

export const configAvailableRadiuses = [
  { name: "none", value: "none" },
  { name: "sm", value: "0.125rem" },
  { name: "md", value: "0.375rem" },
  { name: "lg", value: "0.5rem" },
  { name: "xl", value: "0.75rem" },
  { name: "full", value: "3rem" },
];
