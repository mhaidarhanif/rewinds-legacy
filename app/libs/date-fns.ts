import { hoursToSeconds, addDays } from "date-fns";

export const dateFns = {
  daysToSeconds: (days: number) => {
    return days * 24 * 60 * 60;
  },
  hoursToSeconds,
  addDays,
};
