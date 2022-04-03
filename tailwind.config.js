const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
        brand: {
          50: '#f2fbfb',
          100: '#e6f7f7',
          200: '#bfeaea',
          300: '#99dddd',
          400: '#4dc4c4',
          500: '#00aaaa',
          600: '#009999',
          700: '#008080',
          800: '#006666',
          900: '#005353',
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@vechaiui/core')({
      cssBase: true,
      colors: ['info', 'success', 'warning', 'error'],
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      );
    }),
  ],
};
