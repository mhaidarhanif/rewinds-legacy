import { StackItem } from '~/types';

export const dataStacks: StackItem[] = [
  {
    href: 'https://tailwindcss.com',
    name: 'Tailwind CSS v3.0.23',
    description: 'A utility-first CSS framework',
    subStacks: [
      { name: '@tailwindcss/typography' },
      { name: '@tailwindcss/typography' },
    ],
  },
  {
    href: 'https://tailwindui.com',
    name: 'Tailwind UI',
    description: 'Official Tailwind CSS Components',
  },
  {
    href: 'https://postcss.org',
    name: 'PostCSS v8',
    description: 'A tool for transforming CSS with JavaScript',
  },
  {
    href: 'https://heroicons.com',
    name: 'Heroicons v1',
    description: 'Beautiful hand-crafted SVG icons',
  },
  {
    href: 'https://headlessui.dev',
    name: 'Headless UI v1',
    description: 'Unstyled accessible UI components',
  },
  {
    href: 'https://radix-ui.com',
    name: 'Radix UI v0',
    description: 'Unstyled accessible UI components',
  },
  {
    href: 'https://tailwindcss-radix.vercel.app',
    name: 'Tailwind CSS Radix',
    description: 'Tailwind CSS utilities and variants for styling Radix state',
  },
  {
    href: 'https://vechaiui.com',
    name: 'Vechai UI v0',
    description: 'React Tailwind CSS components',
  },
  {
    href: 'https://hyperui.dev',
    name: 'HyperUI',
    description: 'Collection of free Tailwind CSS components',
  },
  {
    href: 'https://layoutsfortailwind.lalokalabs.dev',
    name: 'LaLoka Layouts',
    description: 'Useful layouts for Tailwind CSS',
  },
  {
    href: 'https://flowbite.com',
    name: 'Flowbite v1',
    description: 'Tailwind CSS components',
  },
  {
    href: 'https://daisyui.com',
    name: 'daisyUI v2',
    description: 'Tailwind CSS components',
  },
];
