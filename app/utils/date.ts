import { dayjs, relativeTime } from "~/libs";

import type { DateTime, Locale } from "~/types";

dayjs().format();
dayjs.extend(relativeTime);

export const getCurrentYear = () => {
  const now = new Date();
  return now.getFullYear();
};

export const getYear = (locale: Locale = "en") => {
  return dayjs().locale(locale).format("YYYY");
};

export const getDayName = (locale: Locale = "en") => {
  return dayjs().locale(locale).format("dddd");
};

export const getDayPeriod = () => {
  const hour = Number(dayjs().format("H"));
  if (hour < 5) return "dawn";
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 21) return "evening";
  if (hour < 24) return "night";
  return "";
};

export const getDayNamePeriod = () => {
  return `${getDayName()} ${getDayPeriod()}`;
};

export const getJoinedDate = (date: DateTime) => {
  return dayjs(date).format("MMMM YYYY");
};

export const getCompleteDate = (date: DateTime) => {
  return dayjs(date).format("D MMMM YYYY");
};

export const getCompleteDateUS = (date: DateTime) => {
  return dayjs(date).format("dddd, MMMM D, YYYY");
};

export const getCompleteDateTime = (date: DateTime) => {
  return dayjs(date).format("D MMMM YYYY HH:mm");
};

export const getRelativeTime = (date: DateTime) => {
  return dayjs().to(dayjs(date));
};
