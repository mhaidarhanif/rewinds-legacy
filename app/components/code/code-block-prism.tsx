import Prism from "prismjs";

import { useEffect, useRef } from "~/hooks";

/**
 * Using plain `prismjs`
 */

interface PrismCodeBlockProps {
  children?: any;
  language?: any;
}

export function PrismCodeBlock({ children, language }: PrismCodeBlockProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
    </div>
  );
}
