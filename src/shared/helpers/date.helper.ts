export const formatDate = (
  date: Date | string,
  locale = "en-US"
): string => {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};


export const formatDateTime = (
  date: Date | string,
  locale = "en-US"
): string => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
};


export const isExpired = (
  expiryDate: Date | string
): boolean => {
  return new Date(expiryDate).getTime() < Date.now();
};