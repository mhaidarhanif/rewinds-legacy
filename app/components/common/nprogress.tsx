import { useNProgress } from "@tanem/react-nprogress";

interface NProgressProps {
  isAnimating: any;
}

export const NProgress = ({ isAnimating }: NProgressProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
    minimum: 0,
    animationDuration: 250,
    incrementDuration: 500,
  });

  return (
    <NProgressContainer
      animationDuration={animationDuration}
      isFinished={isFinished}
    >
      <NProgressBar animationDuration={animationDuration} progress={progress} />
    </NProgressContainer>
  );
};

interface NProgressContainerProps {
  animationDuration: number;
  isFinished: boolean;
  children: React.ReactNode;
}

const NProgressContainer = ({
  animationDuration,
  isFinished,
  children,
}: NProgressContainerProps) => {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: "none",
        transition: `opacity ${animationDuration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

interface ProgressBarProps {
  animationDuration: number;
  progress: number;
}

const NProgressBar = ({ animationDuration, progress }: ProgressBarProps) => {
  return (
    <div
      className="fixed left-0 top-0 z-tooltip h-1 w-full bg-primary-500"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin ${animationDuration}ms linear`,
      }}
    />
  );
};
