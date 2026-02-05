export function removeWhiteSpace(value: string) {
  return value.replace(/ /g, '');
}

export function numberWithDecimals(value, decimals) {
  const y = isNaN(value) ? 0 : value;
  const decimalPlaces = isNaN(decimals) ? 2 : parseInt(decimals, 10);
  return Number(y).toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}

// export function timeFormatter(time, format) {
//   const tZone = getTimeZone();
//   if (!time) return null;
//   if (Number(new Date(time))) {
//     return moment.tz(time, tZone).format(format);
//   }
//   return null;
// }

// export const toProperCase = (str) =>
//   str
//     .split(' ')
//     .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
//     .join(' ');
