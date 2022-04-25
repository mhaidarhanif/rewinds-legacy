import { json, useLoaderData } from 'remix';

import { Anchor, Image } from '~/components';
import { dataStacks } from '~/data';
import { Layout } from '~/layouts';

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
    <Layout className="prose dark:prose-invert">
      <h1>About Rewinds</h1>
      <p>
        <Anchor href="https://rewinds.mhaidarhanif.com">
          Rewinds = Remix Tailwind Starter Kit
        </Anchor>{' '}
        by <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor>
      </p>
      <p>It is a demo project template you can freely use for any purpose</p>

      <Image src="/assets/screenshots/home.png" alt="Home Page Screenshot" />

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
        <li>
          Vechai UI theme switcher and persist theme with a session cookie
        </li>
        <li>NProgress navigation loading bar indicator</li>
        <li>
          ENV setup for frontend library such as analytics: Google Analytics,
          Splitbee, Posthog, etc
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
    </Layout>
  );
}
