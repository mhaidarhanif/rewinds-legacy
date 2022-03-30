# Remix Tailwind Starter

Remix starter kit with Tailwind CSS family of libraries.

Demo to combine the best Tailwind-related ecosystem such as Tailwind
CSS, Headless UI, Radix UI, VechaiUI, daisyUI, and more.

## Stack

- Core
  - Remix
  - TypeScript
- Frontend
  - Tailwind CSS
  - PostCSS
  - Headless UI
  - Radix UI
  - Heroicons
  - Vechaiui
  - daisyUI
- Config
  - ESLint
  - Prettier
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
