import { json, useLoaderData } from 'remix';

import { Anchor } from '~/components';
import { dataStacks } from '~/data';

import type { LoaderFunction } from 'remix';
import type { StackItem } from '~/types';

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
      <h1>About Rewinds</h1>
      <p>
        Rewinds is a Remix Tailwind Starter Kit is a demo project template you
        can freely use.
      </p>

      <h2>Links</h2>
      <ul>
        <li>
          GitHub repo:{' '}
          <Anchor href="https://github.com/mhaidarhanif/rewinds">
            mhaidarhanif/rewinds
          </Anchor>
        </li>
        <li>
          Preview demo:{' '}
          <Anchor href="https://rewinds.mhaidarhanif.com">
            rewinds.mhaidarhanif.com
          </Anchor>
        </li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>TypeScript for type-safety</li>
        <li>Remix as the React framework</li>
        <li>Tailwind CSS using Vechai UI for primary React components</li>
        <li>Headless UI and Radix UI for accessible unstyled components</li>
        <li>Theme switcher and persist theme with a session cookie</li>
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
