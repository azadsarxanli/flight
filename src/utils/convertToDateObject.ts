export function convertToDateObject(dateString: string) {
  const year = parseInt(dateString.slice(0, 4));
  const month = parseInt(dateString.slice(4, 6)) - 1; // Month is zero-indexed
  const day = parseInt(dateString.slice(6, 8));
  const hour = parseInt(dateString.slice(8, 10));
  const minute = parseInt(dateString.slice(10, 12));
  return new Date(year, month, day, hour, minute);
}
