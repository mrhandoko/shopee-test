import numeral from 'numeral';

export const THOUSANDS_FORMAT = '0,0.00';

export function formatNumber(n) {
  return `${numeral(n).format('0.00')}`
}

export function formatThousand(n) {
  return numeral(n).format(`${THOUSANDS_FORMAT}`);
}