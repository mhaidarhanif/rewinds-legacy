import { useNProgress } from '@tanem/react-nprogress';
import { FunctionComponent } from 'react';

interface NProgressProps {
  isAnimating: any;
}

export const NProgress: FunctionComponent<NProgressProps> = ({
  isAnimating,
}) => {
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
}

const NProgressContainer: FunctionComponent<NProgressContainerProps> = ({
  animationDuration,
  isFinished,
  children,
}) => {
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
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

const NProgressBar: FunctionComponent<ProgressBarProps> = ({
  animationDuration,
  progress,
}) => {
  return (
    <div
      className="fixed left-0 top-0 z-tooltip h-1 w-full bg-primary-500"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin ${animationDuration}ms linear`,
      }}
    >
      <div
        className="absolute right-0 block h-full  opacity-100"
        style={{
          boxShadow: '0 0 10px #29d, 0 0 5px #29d',
          transform: 'rotate(3deg) translate(0px, -4px)',
        }}
      />
    </div>
  );
};
