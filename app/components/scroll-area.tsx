import * as ScrollArea from '@radix-ui/react-scroll-area';

interface ScrollAreaProps {
  children: React.ReactNode;
}

export const RadixScrollArea = ({ children }: ScrollAreaProps) => {
  return (
    <ScrollArea.Root className="h-96 overflow-hidden rounded-base">
      <ScrollArea.Viewport className="h-full w-full rounded-base">
        {children}
      </ScrollArea.Viewport>

      <ScrollAreaScrollbar orientation="horizontal" />
      <ScrollAreaScrollbar orientation="vertical" />
      <ScrollArea.Corner className="scroll-area-corner" />
    </ScrollArea.Root>
  );
};

const ScrollAreaScrollbar = ({
  orientation,
}: {
  orientation: 'horizontal' | 'vertical';
}) => {
  return (
    <ScrollArea.Scrollbar
      orientation={orientation}
      className="scroll-area-scrollbar"
    >
      <ScrollArea.Thumb className="scroll-area-thumb" />
    </ScrollArea.Scrollbar>
  );
};
