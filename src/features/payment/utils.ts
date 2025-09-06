export const formatCardNumber = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  // Insert space every 4 digits
  return digits.replace(/(.{4})/g, '$1 ').trim();
};

export const formatCardDate = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  if (digits.length === 0) return '';
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + '/' + digits.slice(2, 4);
};
