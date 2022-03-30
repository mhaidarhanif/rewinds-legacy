import { P } from '~/components';

export default function AboutRoute() {
  return (
    <article className="prose dark:prose-invert">
      <h1>About this project</h1>
      <P>
        Remix Tailwind Starter Kit is a demo project template you can freely
        use.
      </P>
      <P>
        Example demo to combine the best Tailwind-related ecosystem such as:
      </P>
      <ul>
        <li>Tailwind CSS v3 with its plugins</li>
        <li>PostCSS v8</li>
        <li>Heroicons v1</li>
        <li>Headless UI v1 — Unstyled accessible UI components</li>
        <li>Radix UI v0 — Unstyled accessible UI components</li>
        <li>VechaiUI v0 — React Tailwind CSS components</li>
        <li>Flowbite v1 — Tailwind CSS components</li>
        <li>daisyUI v2 — Tailwind CSS components</li>
      </ul>
    </article>
  );
}
