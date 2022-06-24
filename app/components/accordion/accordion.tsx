/**
 * Plain HTML Accordion
 * Using summary
 */

import { PropTypes } from "~/libs";

export const Accordion = ({ items }: AccordionProps) => {
  console.info({ items });

  return (
    <div>
      <details>
        <summary>Header</summary>
        <div>Content</div>
      </details>
    </div>
  );
};

interface AccordionItem {
  id: string | number;
  header: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: Array<AccordionItem>;
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      header: PropTypes.node,
      content: PropTypes.node,
    }),
  ),
};
