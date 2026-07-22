export const capitalize = (
  value: string
): string => {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
};


export const capitalizeWords = (
  value: string
): string => {
  return value
    .split(" ")
    .map(capitalize)
    .join(" ");
};


export const truncate = (
  value: string,
  length = 50
): string => {
  if (value.length <= length) return value;

  return `${value.slice(0, length)}...`;
};


export const slugify = (
  value: string
): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};