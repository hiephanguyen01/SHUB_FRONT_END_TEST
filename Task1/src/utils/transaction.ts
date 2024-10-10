import { Transaction } from "@/types";

export function filterTransactions(
  transactions: Transaction[],
  startTime: string,
  endTime: string
): Transaction[] {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  return transactions.filter((t) => {
    const hours = t.timestamp.getHours();
    const minutes = t.timestamp.getMinutes();
    const timeInMinutes = hours * 60 + minutes;
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    return (
      timeInMinutes >= startTimeInMinutes && timeInMinutes <= endTimeInMinutes
    );
  });
}

export function calculateTotal(transactions: Transaction[]): number {
  return transactions.reduce((sum, t) => sum + t.amount, 0);
}
