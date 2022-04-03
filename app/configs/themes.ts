import { ColorScheme } from '@vechaiui/react';

const colors = require('tailwindcss/colors');

export const day: ColorScheme = {
  id: 'day',
  type: 'light',
  colors: {
    primary: colors.sky,
    neutral: colors.slate,
    bg: { base: colors.slate['100'], fill: colors.slate['100'] },
    text: { foreground: colors.slate['900'], muted: colors.slate['700'] },
  },
};

export const wind: ColorScheme = {
  id: 'wind',
  type: 'light',
  colors: {
    primary: colors.cyan,
    neutral: colors.gray,
    bg: { base: colors.gray['100'], fill: colors.gray['100'] },
    text: { foreground: colors.gray['900'], muted: colors.gray['700'] },
  },
};

export const rose: ColorScheme = {
  id: 'rose',
  type: 'light',
  colors: {
    primary: colors.rose,
    neutral: colors.stone,
    bg: { base: colors.stone['100'], fill: colors.stone['100'] },
    text: { foreground: colors.stone['900'], muted: colors.stone['700'] },
  },
};

export const emerald: ColorScheme = {
  id: 'emerald',
  type: 'light',
  colors: {
    primary: colors.emerald,
    neutral: colors.zinc,
    bg: { base: colors.zinc['100'], fill: colors.zinc['100'] },
    text: { foreground: colors.zinc['900'], muted: colors.zinc['700'] },
  },
};

export const amber: ColorScheme = {
  id: 'amber',
  type: 'light',
  colors: {
    primary: colors.amber,
    neutral: colors.stone,
    bg: { base: colors.stone['100'], fill: colors.stone['100'] },
    text: { foreground: colors.stone['900'], muted: colors.stone['700'] },
  },
};

export const ash: ColorScheme = {
  id: 'ash',
  type: 'light',
  colors: {
    primary: colors.indigo,
    neutral: colors.slate,
    bg: { base: colors.slate['100'], fill: colors.slate['100'] },
    text: { foreground: colors.slate['900'], muted: colors.slate['700'] },
  },
};

export const night: ColorScheme = {
  id: 'light',
  type: 'dark',
  colors: {
    bg: { base: colors.gray['900'], fill: colors.gray['800'] },
    text: { foreground: colors.gray['100'], muted: colors.gray['300'] },
    primary: colors.sky,
    neutral: colors.gray,
  },
};

export const cool: ColorScheme = {
  id: 'cool',
  type: 'dark',
  colors: {
    primary: colors.cyan,
    neutral: colors.slate,
    bg: { base: colors.slate['900'], fill: colors.slate['900'] },
    text: { foreground: colors.slate['100'], muted: colors.slate['300'] },
  },
};

export const midnight: ColorScheme = {
  id: 'midnight',
  type: 'dark',
  colors: {
    primary: colors.rose,
    neutral: colors.neutral,
    bg: { base: colors.neutral['900'], fill: colors.neutral['900'] },
    text: { foreground: colors.neutral['100'], muted: colors.neutral['300'] },
  },
};

export const terminal: ColorScheme = {
  id: 'terminal',
  type: 'dark',
  colors: {
    primary: colors.emerald,
    neutral: colors.zinc,
    bg: { base: colors.zinc['900'], fill: colors.zinc['900'] },
    text: { foreground: colors.zinc['100'], muted: colors.zinc['300'] },
  },
};

export const pale: ColorScheme = {
  id: 'pale',
  type: 'dark',
  colors: {
    primary: colors.violet,
    neutral: colors.slate,
    bg: { base: colors.slate['900'], fill: colors.slate['800'] },
    text: { foreground: colors.slate['100'], muted: colors.slate['300'] },
  },
};

export const dawn: ColorScheme = {
  id: 'dawn',
  type: 'dark',
  colors: {
    primary: colors.pink,
    neutral: {
      50: '#f6eff8',
      100: '#dad3de',
      200: '#c1b7c7',
      300: '#a89ab0',
      400: '#8f7d99',
      500: '#766380',
      600: '#5c4d64',
      700: '#413647',
      800: '#28212c',
      900: '#0f0a13',
    },
    bg: { base: '#0f0a13', fill: '#28212c' },
    text: { foreground: '#dad3de', muted: '#a89ab0' },
  },
};

export const configThemes = {
  day,
  wind,
  rose,
  emerald,
  amber,
  ash,
  night,
  cool,
  midnight,
  terminal,
  dawn,
  pale,
};

export const configAvailableThemes = [
  {
    name: 'Day',
    id: 'day',
    type: 'light',
    primaryColor: configThemes.day.colors.primary['500'],
    backgroundColor: configThemes.day.colors.bg.base,
  },
  {
    name: 'Wind',
    id: 'wind',
    type: 'light',
    primaryColor: configThemes.wind.colors.primary['500'],
    backgroundColor: configThemes.wind.colors.bg.base,
  },
  {
    name: 'Rose',
    id: 'rose',
    type: 'light',
    primaryColor: configThemes.rose.colors.primary['500'],
    backgroundColor: configThemes.rose.colors.bg.base,
  },
  {
    name: 'Emerald',
    id: 'emerald',
    type: 'light',
    primaryColor: configThemes.emerald.colors.primary['500'],
    backgroundColor: configThemes.emerald.colors.bg.base,
  },
  {
    name: 'Amber',
    id: 'amber',
    type: 'light',
    primaryColor: configThemes.amber.colors.primary['500'],
    backgroundColor: configThemes.amber.colors.bg.base,
  },
  {
    name: 'Ash',
    id: 'ash',
    type: 'light',
    primaryColor: configThemes.ash.colors.primary['500'],
    backgroundColor: configThemes.ash.colors.bg.base,
  },
  {
    name: 'Night',
    id: 'night',
    type: 'dark',
    primaryColor: configThemes.night.colors.primary['500'],
    backgroundColor: configThemes.night.colors.bg.base,
  },
  {
    name: 'Cool',
    id: 'cool',
    type: 'dark',
    primaryColor: configThemes.cool.colors.primary['500'],
    backgroundColor: configThemes.cool.colors.bg.base,
  },
  {
    name: 'Midnight',
    id: 'midnight',
    type: 'dark',
    primaryColor: configThemes.midnight.colors.primary['500'],
    backgroundColor: configThemes.midnight.colors.bg.base,
  },
  {
    name: 'Terminal',
    id: 'terminal',
    type: 'dark',
    primaryColor: configThemes.terminal.colors.primary['500'],
    backgroundColor: configThemes.terminal.colors.bg.base,
  },
  {
    name: 'Dawn',
    id: 'dawn',
    type: 'dark',
    primaryColor: configThemes.dawn.colors.primary['500'],
    backgroundColor: configThemes.dawn.colors.bg.base,
  },
  {
    name: 'Pale',
    id: 'pale',
    type: 'dark',
    primaryColor: configThemes.pale.colors.primary['500'],
    backgroundColor: configThemes.pale.colors.bg.base,
  },
];

export const configAvailableRadiuses = [
  { name: 'none', value: 'none' },
  { name: 'sm', value: '0.125rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'xl', value: '0.75rem' },
  { name: 'full', value: '3rem' },
];
