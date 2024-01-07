function formatBirthDate(inputDate: string) {
  const numericPart = inputDate.replace(/\D/g, '');
  const year = numericPart ? parseInt(numericPart, 10) : NaN;

  if (!isNaN(year)) {
    const month = 1; // January
    const day = 1;

    return `${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}.${Math.abs(year)}`;
  }

  return 'unknown';
}

export { formatBirthDate };
