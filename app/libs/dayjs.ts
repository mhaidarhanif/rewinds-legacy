import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export { dayjs };
