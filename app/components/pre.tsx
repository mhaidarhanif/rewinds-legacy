import { FunctionComponent } from 'react';

interface PreProps {
  data: string;
}

export const Pre: FunctionComponent<PreProps> = ({ data }) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
