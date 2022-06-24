import { Disclosure } from "@headlessui/react";

import { VechaiIcon } from "~/components";
import { IconCaretUp } from "~/libs";
import { classx } from "~/utils";

export const HeadlessDisclosureExample = () => {
  return (
    <div className="flex space-x-4 p-8">
      <div className="w-full">
        <Disclosure defaultOpen>
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  className={classx(
                    "flex w-full cursor-base items-center justify-between rounded-base px-4 py-2 focus:outline-none",
                    "bg-primary-50 text-primary-800 dark:bg-primary-200/15 dark:text-primary-200",
                  )}
                >
                  <span>What is Lorem Ipsum?</span>
                  <VechaiIcon
                    as={IconCaretUp}
                    label="caret-up"
                    className={classx(
                      "h-4 w-4",
                      open ? "rotate-180 transform text-primary-500" : "",
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => {
            return (
              <>
                <Disclosure.Button
                  className={classx(
                    "flex w-full cursor-base items-center justify-between rounded-base px-4 py-2 focus:outline-none",
                    "bg-primary-50 text-primary-800 dark:bg-primary-200/15  dark:text-primary-200",
                  )}
                >
                  <span>Where does it come from?</span>
                  <VechaiIcon
                    as={IconCaretUp}
                    label="caret-up"
                    className={classx(
                      "h-4 w-4",
                      open ? "rotate-180 transform text-primary-500" : "",
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>
      </div>
    </div>
  );
};
