import * as Tabs from "@radix-ui/react-tabs";

const RadixTabs = Tabs;

export { RadixTabs };

export const RadixTabsExample = () => {
  const tabs = [
    {
      value: "tab1",
      name: "One",
      content: "Tab one content",
    },
    {
      value: "tab2",
      name: "Two",
      content: "Tab second content",
    },
    {
      value: "tab3",
      name: "Three",
      content: "Tab third content",
    },
  ];

  return (
    <Tabs.Root className="flex flex-col" defaultValue="tab1">
      <Tabs.List
        aria-label="tabs example"
        className="flex flex-row justify-start"
      >
        {tabs.map((tab) => {
          return (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="tabs-radix-trigger"
            >
              {tab.name}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {tabs.map((tab) => {
        return (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            tabIndex={-1}
            className="tabs-radix-content"
          >
            {tab.content}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};
