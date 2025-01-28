export function getDaysInMonth(year: number, month: number): Date[] {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getMonthData(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = getDaysInMonth(year, month);

  const daysBeforeMonth = Array.from(
    { length: (firstDay.getDay() + 6) % 7 },
    (_, i) => new Date(year, month, -i),
  ).reverse();

  const daysAfterMonth = Array.from(
    { length: (7 - lastDay.getDay()) % 7 },
    (_, i) => new Date(year, month + 1, i + 1),
  );

  return [...daysBeforeMonth, ...daysInMonth, ...daysAfterMonth];
}
