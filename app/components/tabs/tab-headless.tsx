import { Tab } from "@headlessui/react";
import {
  BellIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

import { classx } from "~/utils";

const TabHeadless = Tab;

export { TabHeadless };

export const TabHeadlessExample = () => {
  const tabs = [
    {
      value: "tab1",
      name: "Account",
      content: "Tab one content",
      icon: UserCircleIcon,
    },
    {
      value: "tab2",
      name: "Notifications",
      content: "Tab second content",
      icon: BellIcon,
    },
    {
      value: "tab3",
      name: "Security",
      content: "Tab third content",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="flex w-full flex-wrap space-x-4 p-8">
      <Tab.Group as="div" className="flex flex-col" defaultIndex={0}>
        <Tab.List
          aria-label="tabs example"
          className="flex flex-row justify-start"
        >
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.value}
                value={tab.value}
                className={classx(
                  "flex items-center justify-center",
                  "-mb-px h-10 cursor-base whitespace-nowrap px-4 py-2 text-center text-sm focus:outline-none",
                  "inline-block flex-shrink-0 rounded-md",
                  "bg-transparent text-neutral-600",
                  "hover:text-primary-900",
                  "selected:bg-primary-200 selected:text-primary-900",
                  // dark
                  "dark:bg-transparent dark:text-neutral-400",
                  "dark:hover:text-primary-100",
                  "dark:selected:bg-primary-700 dark:selected:text-primary-100",
                )}
              >
                {tab.name}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab) => {
            return (
              <Tab.Panel
                key={tab.value}
                // value={tab.value}
                className="flex-grow-1 p-4"
              >
                {tab.content}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
