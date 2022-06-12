interface ButtonIconProps {
  name: string;
}

export const ButtonIcon = ({ name }: ButtonIconProps) => {
  return <button type="button">{name}</button>;
};
