export const formatCurrency = (
  amount: number,
  currency = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};


export const formatNumber = (
  value: number
): string => {
  return new Intl.NumberFormat("en-US").format(value);
};


export const calculatePercentage = (
  value: number,
  total: number
): number => {
  if (!total) return 0;

  return Math.round((value / total) * 100);
};