import { format } from 'date-fns';

// Type definition for the date range object
interface DateRange {
  from: Date;
  to: Date;
}

// Function to format epoch time to a readable date string
export const dateFormatter = (epoch: number): string => {
  const date = new Date(epoch * 1000);
  return format(date, 'MMM d');
};

// Function to format seconds into days
export const dayFormatter = (seconds: number): string => {
  const days = parseFloat((seconds / 86400).toFixed(2));
  return days + 'd';
};

// Function to get the number of days between two dates
export function getDaysBetweenDates(dateRange: DateRange): number {
  let differenceInMs = 0;

  if (dateRange?.from && dateRange.to instanceof Date) {
    differenceInMs = dateRange.to.getTime() - dateRange.from.getTime();
  }

  return convertMsToDays(differenceInMs + 1);
}

// Helper function to convert milliseconds to days
function convertMsToDays(ms: number): number {
  const msInOneSecond = 1000;
  const secondsInOneMinute = 60;
  const minutesInOneHour = 60;
  const hoursInOneDay = 24;

  const minutesInOneDay = hoursInOneDay * minutesInOneHour;
  const secondsInOneDay = secondsInOneMinute * minutesInOneDay;
  const msInOneDay = msInOneSecond * secondsInOneDay;

  return Math.ceil(ms / msInOneDay);
}
