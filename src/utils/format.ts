export const compactNumber = (val: number | string) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
    compactDisplay: 'short',
  }).format(Number(val));
};

export const formatNumber = (
  val: string | number,
  locale = 'en-US',
  options?: Intl.NumberFormatOptions,
) => {
  return Number(val).toLocaleString(locale, {
    maximumFractionDigits: 3,
    ...options,
  });
};
