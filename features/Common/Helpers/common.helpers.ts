
export const _formatNumber = (number?: number): string => {
  if (typeof number === 'undefined') {
    return '0 kr';
  }
  const parts = number.toString().split(".")
  const numbers = parts[0]
  const decimals = parts[1]

  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  let final = numbers.replace(thousands, " ") + (decimals ? "," + decimals.slice(0, 2) : "")
  return final + ' kr';
}


export const _formatDate = (date?: Date): string => {
  if (typeof date === 'undefined') {
    return '';
  }
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
}

export const _getDateFromString = (date: string): Date => {
  const parts = date.split("/");
  const toDate = new Date(Number(parts[2]), (Number(parts[1]) - 1), Number(parts[0]));
  return toDate;
}
