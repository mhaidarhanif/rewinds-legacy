import { ButtonAnchor, ButtonGroup, IconVechai } from "~/components";
import { IconCalendar } from "~/libs";

export const ButtonGroupCTA = () => {
  return (
    <ButtonGroup size="lg">
      <ButtonAnchor href="/signup">Sign Up for Free</ButtonAnchor>
      <ButtonAnchor
        variant="outline"
        href="/demo"
        leftIcon={
          <IconVechai
            as={IconCalendar}
            label="schedule-demo"
            className="ml-1 h-4 w-4"
          />
        }
      >
        Schedule Demo
      </ButtonAnchor>
    </ButtonGroup>
  );
};
