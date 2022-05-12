import * as Collapsible from '@radix-ui/react-collapsible';

const CollapsibleExample = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger />
      <Collapsible.Content />
    </Collapsible.Root>
  );
};

export { CollapsibleExample, Collapsible };
