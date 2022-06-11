import { IconSpan } from "~/components";

interface IconThemeProps {
  name: string;
}

export const IconTheme = ({ name }: IconThemeProps) => {
  return (
    <div className="h-10 w-10 rounded-base bg-primary-500 p-3">
      <IconSpan name={name} className="text-neutral-100" />
    </div>
  );
};
