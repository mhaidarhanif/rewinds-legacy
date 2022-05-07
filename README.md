# Rewinds – Remix Tailwind Starter Kit

![tailwindcss v3](https://img.shields.io/badge/tailwindcss-v3-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)

Rewinds is a Remix starter kit with Tailwind CSS v3 family of libraries.

This is an example demo to combine the best Tailwind-related ecosystem such as Tailwind CSS, Headless UI, Radix UI, Vechai UI, and more.

Visit live: [rewinds.mhaidarhanif.com](https://rewinds.mhaidarhanif.com)

Features:

- Remix as the React framework
- Tailwind CSS using Vechai UI as primary components
- Multiple themes switcher and persist theme with a session cookie
- Only focus on the frontend styling and project structure, without particular in testing, backend, and database. For that matters, check out the official Remix Stacks instead: https://remix.run/stacks
- More features listed in [the about page](https://rewinds.mhaidarhanif.com/about)

Screenshots:

[![Screenshot](public/assets/screenshots/home.png)](https://rewinds.mhaidarhanif.com)

## Stacks

Check the complete tech stack in the [the about page](https://rewinds.mhaidarhanif.com/about)

### Core

- React v17
- Remix v1
- TypeScript v4

### Frontend

- Tailwind CSS v3
- PostCSS v8
- Fonts
  - Google Fonts
  - Fontbit CDN
- Icons
  - Heroicons v1
  - Font Awesome
  - Phospor Icons
- Components
  - Headless UI v1 – Unstyled accessible UI components
  - Radix UI v0 – Unstyled accessible UI components
    - Tailwind Radix
  - Vechai UI v0 – React Tailwind CSS components
  - HyperUI – Collection of free Tailwind CSS components
  - LaLoka Layouts – Useful layouts for Tailwind CSS
  - Flowbite v1 – Tailwind CSS components
  - daisyUI v2 – Tailwind CSS components
  - NProgress

### Config

- ESLint v8
- Prettier v2

### Utility

- `clsx` aliased as `classx`

### Deployment

- Vercel

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Copy the `.env.example` into `.env`:

```sh
cp .env.example .env
```

Setup the environment variables here and Vercel if want to deploy there:

```sh
# SERVER
SESSION_SECRET="put_the_secret_here"
REST_ENDPOINT="https://echo.hoppscotch.io"
GRAPHQL_ENDPOINT="https://echo.hoppscotch.io/graphql"
GRAPHCMS_ENDPOINT="https://api.graphcms.com/v2/id123/master"
CONVERTKIT_API_KEY="abcdefghijklmnopqrstuv"
CONVERTKIT_FORM_ID="1234567"

# CLIENT
GA_MEASUREMENT_ID="G-ABCDEFGHIJ"
```

- `SESSION_SECRET` for persisting the themes on browser sessions
- `GRAPHQL_ENDPOINT` for `graphql-request` or `urql`
- `GRAPHCMS_ENDPOINT` for GraphCMS
- `CONVERTKIT_API_KEY` for ConvertKit newsletter platform account
- `CONVERTKIT_FORM_ID` for ConvertKit actual subscription form
- `GA_MEASUREMENT_ID` for Google Analytics 4

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Build

Make sure that it can build just fine:

```sh
npm run build
```

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Notes

### Vechai UI

Edit `tailwind.config.js` to remove custom colors to reduce the stylesheet build size.
`cssBase` is still required to get the default Tailwind CSS colors into Vechai UI themes.

```diff
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
-       info: colors.blue,
-       success: colors.green,
-       warning: colors.yellow,
-       error: colors.red,
      },
    },
  },
  plugins: [
    // ...
   require('@vechaiui/core')({
     cssBase: true,
-    colors: ['info', 'success', 'warning', 'error'],
   }),
  ],
};
```

### ConvertKit

Mailing Address: https://help.convertkit.com/en/articles/2502494-alternatives-for-your-physical-address
