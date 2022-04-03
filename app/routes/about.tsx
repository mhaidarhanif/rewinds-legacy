import { json, LoaderFunction, useLoaderData } from 'remix';

import { Anchor } from '~/components';
import { dataStacks } from '~/data';
import { StackItem } from '~/types';

type LoaderData = {
  stacks: StackItem[];
};

export const loader: LoaderFunction = async () => {
  return json({ stacks: dataStacks });
};

export default function AboutRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="prose dark:prose-invert">
      <h1>About this project</h1>
      <p>
        Remix Tailwind Starter Kit is a demo project template you can freely
        use.
      </p>
      <h2>Features</h2>
      <ul>
        <li>TypeScript for type-safety</li>
        <li>Remix as the React framework</li>
        <li>Tailwind CSS using Vechai UI for primary React components</li>
        <li>Headless UI and Radix UI for accessible unstyled components</li>
        <li>Theme switcher and persist theme with a session cookie</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li>
          GitHub repo:{' '}
          <a href="https://github.com/mhaidarhanif/remix-tailwind-starter-kit">
            mhaidarhanif/remix-tailwind-starter-kit
          </a>
        </li>
        <li>
          Preview demo:{' '}
          <a href="https://remix-tailwind-starter-kit.vercel.app">
            remix-tailwind-starter-kit.vercel.app
          </a>
        </li>
      </ul>
      <h2>Stacks</h2>
      <ul>
        {data.stacks.map((item) => {
          return (
            <li key={item.name}>
              <Anchor href={item.href}>{item.name}</Anchor>
              {item.description && <span> — {item.description}</span>}
            </li>
          );
        })}
      </ul>
      <p>
        If you need more resources, check out{' '}
        <Anchor href="https://github.com/aniftyco/awesome-tailwindcss">
          awesome-tailwindcss
        </Anchor>
      </p>
    </div>
  );
}
