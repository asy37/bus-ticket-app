export function parseDate(dateString: string | undefined): Date | undefined {
  if (!dateString) return undefined;
  const parts = dateString.split('.');
  if (parts.length !== 3) return undefined;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}
