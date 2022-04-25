import styles from '~/styles/out.css';

const fontFamiles = `family=Archivo:wght@400;700;900`;

export const configDocumentLinks = [
  {
    rel: 'shortcut icon',
    href: '/favicons/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'mask-icon',
    href: '/favicons/safari-pinned-tab.svg',
    color: '#0081f1',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
  {
    href: 'https://fontbit.io',
    rel: 'preconnect',
  },
  {
    href: `https://fontbit.io/css2?${fontFamiles}&display=swap`,
    rel: 'stylesheet',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];
