import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Anchor, Image } from '~/components';
import { dataMainStacks, dataReferenceStacks, dataFeatures } from '~/data';
import { Layout } from '~/layouts';

import type { LoaderFunction } from '@remix-run/node';
import type { StackItem } from '~/types';

type LoaderData = {
  features: string[];
  mainStacks: StackItem[];
  referenceStacks: StackItem[];
};

export const loader: LoaderFunction = async () => {
  return json({
    features: dataFeatures,
    mainStacks: dataMainStacks,
    referenceStacks: dataReferenceStacks,
  });
};

export default function AboutRoute() {
  const { features, mainStacks, referenceStacks } = useLoaderData<LoaderData>();

  return (
    <Layout>
      <article className="prose-config">
        <h1>About</h1>
        <p>
          <Anchor href="https://rewinds.mhaidarhanif.com">Rewinds</Anchor> is a
          Remix Tailwind Starter Kit made by{' '}
          <Anchor href="https://mhaidarhanif.com">M Haidar Hanif</Anchor> (
          <Anchor href="https://github.com/mhaidarhanif">@mhaidarhanif</Anchor>
          ).
        </p>

        <p>
          It is a demo project template you can freely use for any purpose. On
          GitHub, you can directly{' '}
          <Anchor href="https://github.com/mhaidarhanif/rewinds/generate">
            use this template
          </Anchor>{' '}
          as your own repo.
        </p>

        <p>
          The goal is to have several examples and demos to combine the best
          Tailwind-related ecosystem such as Tailwind CSS v3, Tailwind UI,
          Headless UI, Radix UI, Vechai UI, and more. We also encourage{' '}
          <Anchor href="https://web.dev/accessibility">
            the accessibility guidelines
          </Anchor>
          . So keep in mind this is not intended towards simplicity, rather to
          collect as much as styling practices as it can.
        </p>

        <Image src="/assets/screenshots/home.png" alt="Home Page Screenshot" />

        <section>
          <h2>Links</h2>
          <ul>
            <li>
              Preview demo:{' '}
              <Anchor href="https://rewinds.mhaidarhanif.com">
                rewinds.mhaidarhanif.com
              </Anchor>
            </li>
            <li>
              GitHub repo:{' '}
              <Anchor href="https://github.com/mhaidarhanif/rewinds">
                mhaidarhanif/rewinds
              </Anchor>
            </li>
          </ul>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            {features.map((item) => {
              return <li key={item.substring(0, 20)}>{item}</li>;
            })}
          </ul>
        </section>

        <section>
          <h2>Main Stacks</h2>
          <p>The list of the main libraries and tools. Used as dependencies.</p>
          <ul>
            {mainStacks.map((item) => {
              return (
                <li key={item.name}>
                  <Anchor href={item.url}>{item.name}</Anchor>
                  {item.description && <span> – {item.description}</span>}
                  {item.subItems && (
                    <ul>
                      {item.subItems.map((subItem) => {
                        return (
                          <li key={subItem.name}>
                            {subItem.url ? (
                              <Anchor href={subItem.url}>{subItem.name}</Anchor>
                            ) : (
                              <span className="font-bold">{subItem.name}</span>
                            )}
                            {subItem.description && (
                              <span> – {subItem.description}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2>Reference Stacks</h2>
          <p>
            The list of the references for UI and component styling. Not used as
            dependencies, only for inspirations or the code itself can just be
            copied.
          </p>
          <ul>
            {referenceStacks.map((item) => {
              return (
                <li key={item.name}>
                  <Anchor href={item.url}>{item.name}</Anchor>
                  {item.description && <span> – {item.description}</span>}
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
        </section>
      </article>
    </Layout>
  );
}
