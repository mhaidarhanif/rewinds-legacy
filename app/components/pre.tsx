import type { FunctionComponent } from 'react';

interface PreProps {
  children: string;
}

export const Pre: FunctionComponent<PreProps> = ({ children }) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2 text-xs">{children}</pre>
  );
};

interface PreDataProps {
  data: string;
}

export const PreData: FunctionComponent<PreDataProps> = ({ data }) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2 text-xs">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
