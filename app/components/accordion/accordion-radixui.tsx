import * as RadixAccordionPrimitive from "@radix-ui/react-accordion";

import { IconCaretDown, PropTypes } from "~/libs";
import { classx } from "~/utils";

export const RadixAccordion = ({ type, items }: RadixAccordionProps) => {
  return (
    <RadixAccordionPrimitive.Root type={type} className={classx("space-y-4")}>
      {items.map(({ id, header, content }) => {
        const isHeaderString = typeof header === "string";
        const isContentString = typeof content === "string";

        return (
          <RadixAccordionPrimitive.Item
            key={id}
            value={`${id}`}
            className="focus-ring-within rounded-base"
          >
            <RadixAccordionPrimitive.Header asChild className="w-full">
              <RadixAccordionPrimitive.Trigger
                className={classx(
                  "group",
                  "radix-state-open:rounded-t-base radix-state-closed:rounded-base",
                  "text-base focus:outline-none",
                  "bg-secondary inline-flex w-full items-start justify-between px-5 py-5 text-left",
                )}
              >
                {isHeaderString ? (
                  <span className="font-bold text-neutral-900 dark:text-neutral-100">
                    {header}
                  </span>
                ) : (
                  header
                )}

                <IconCaretDown
                  className={classx(
                    "ml-2 h-5 w-5 shrink-0 text-neutral-700 ease-in-out dark:text-neutral-400",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
                  )}
                />
              </RadixAccordionPrimitive.Trigger>
            </RadixAccordionPrimitive.Header>

            <RadixAccordionPrimitive.Content className="pt-r1 bg-secondary w-full rounded-b-lg px-5 pb-5">
              {isContentString ? <p>{content}</p> : content}
            </RadixAccordionPrimitive.Content>
          </RadixAccordionPrimitive.Item>
        );
      })}
    </RadixAccordionPrimitive.Root>
  );
};

interface RadixAccordionItem {
  id: string | number;
  header: React.ReactNode;
  content: React.ReactNode;
}

interface RadixAccordionProps {
  type: "multiple" | "single";
  items: Array<RadixAccordionItem>;
}

RadixAccordion.propTypes = {
  type: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      header: PropTypes.node,
      content: PropTypes.node,
    }),
  ),
};

RadixAccordion.defaultProps = {
  type: "multiple",
  items: [
    {
      id: "item1",
      header: "What is Radix UI?",
      content:
        "Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.",
    },
    {
      id: "item2",
      header:
        "Each primitive can be installed individually so you we adopt them incrementally?",
      content: "Yes!",
    },
    {
      id: "item3",
      header: "Is it accessible?",
      content: "Yes!",
    },
  ],
};
