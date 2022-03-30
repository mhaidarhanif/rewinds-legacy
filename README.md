# Remix Tailwind Starter Kit

Remix starter kit with Tailwind CSS v3 family of libraries.

Example demo to combine the best Tailwind-related ecosystem such as Tailwind
CSS, Headless UI, Radix UI, VechaiUI, Flowbite, daisyUI, and more.

Preview: [remix-tailwind-starter-kit.vercel.app](https://remix-tailwind-starter-kit.vercel.app)

![Screenshot](public/screenshot.png)

## Stack

- Core
  - React v17
  - Remix v1
  - TypeScript v4
- Frontend
  - Tailwind CSS v3
  - PostCSS v8
  - Heroicons v1
  - Headless UI v1 — Unstyled accessible UI components
  - Radix UI v0 — Unstyled accessible UI components
  - VechaiUI v0 — React Tailwind CSS components
    - Fully featured React component
  - Flowbite v1 — Tailwind CSS components
    - Only to get the class names
  - daisyUI v2 — Tailwind CSS components
    - Unused if using VechaiUI
- Config
  - ESLint v8
  - Prettier v2
  - Vercel

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
