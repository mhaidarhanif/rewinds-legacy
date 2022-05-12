import { classx } from '~/utils';

interface PreProps {
  children: string;
}

export const Pre = ({ children }: PreProps) => {
  return (
    <pre
      className={classx(
        'border-panel rounded-base bg-primary-900/10 p-2 ',
        'text-xs sm:text-sm md:text-base',
      )}
    >
      {JSON.stringify(children, null, 2)}
    </pre>
  );
};

interface PreDataProps {
  data: string;
}

export const PreData = ({ data }: PreDataProps) => {
  return (
    <pre className="rounded-base bg-primary-900/10 p-2 text-xs">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
