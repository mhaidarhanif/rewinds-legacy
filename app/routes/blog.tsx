import { Outlet } from "~/components";
import { Layout } from "~/layouts";

/**
 * Blog route
 *
 * Using Nested Routes with
 * blog/index.tsx
 * blog/$articleSlug.tsx
 */

export default function Blog() {
  return (
    <Layout variant="medium">
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Oh no, something went wrong!</h1>
      <pre>{error.message}</pre>
    </div>
  );
}
