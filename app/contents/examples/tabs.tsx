import {
  TabHeadlessExample,
  RadixTabsExample,
  TabSimpleExample,
} from "~/components";

export const ExampleTabs = () => {
  return (
    <div className="space-y-5">
      <h2>Simple</h2>
      <div className="example">
        <TabSimpleExample />
      </div>

      <h2>Radix UI</h2>
      <div className="example">
        <RadixTabsExample />
      </div>

      <h2>Headless UI</h2>
      <div className="example">
        <TabHeadlessExample />
      </div>
    </div>
  );
};
