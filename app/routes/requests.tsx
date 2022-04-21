import { RemixLink } from '~/components';

export default function RequestsRoute() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Example requests</h1>
      <ul>
        <li>
          <RemixLink to="rest">REST</RemixLink>
        </li>
        <li>
          <RemixLink to="graphql">GraphQL</RemixLink>
        </li>
      </ul>
    </div>
  );
}
