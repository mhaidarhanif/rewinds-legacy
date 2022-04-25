import type { FunctionComponent } from 'react';

interface PreProps {
  children: string;
}

export const Pre: FunctionComponent<PreProps> = ({ children }) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2">
      {JSON.stringify(children, null, 2)}
    </pre>
  );
};
