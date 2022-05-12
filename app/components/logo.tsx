import { IconRewind } from "~/libs";
import { classx } from "~/utils";

export const Logo = () => {
  return (
    <div className="flex items-center gap-1 text-3xl transition-[opacity] duration-300 hover:opacity-80">
      <LogoIcon />
      <LogoSpan />
    </div>
  );
};

export const LogoIcon = () => {
  return <IconRewind weight="fill" className="h-8 w-8 fill-primary-500" />;
};

export const LogoSpan = ({ className }: { className?: string }) => {
  return (
    <span
      className={classx(
        "pr-2 font-black tracking-tightest text-primary-500",
        className,
      )}
    >
      Rewinds
    </span>
  );
};
