"use client"

import { useState, useEffect } from 'react'
import { format, subDays } from "date-fns"
import { getDaysBetweenDates } from '@/lib/date-funcs';
import { Calendar as CalendarIcon } from "lucide-react"
import 'react-day-picker/dist/style.css';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

// Function to check if the date range is valid
const isValidDateRange = (dateRange) => {
  if (dateRange?.from && dateRange?.to) {
    const fromDate = new Date(dateRange.from);
    const toDate = new Date(dateRange.to);
    return fromDate < toDate;
  }
  return false;
};

export function DateRangeSelector({}) {

  // This code initializes the date range that the dashboard will show data from.
  // We start by checking if a previously selected date is cached in the browser.
  // If not, we default to the past 7 days
  const [dateRange, setDateRange] = useState(() => {
    console.log('Initializing activeDateRange');
    const storedDateRange = localStorage.getItem('dateRange');
    if (storedDateRange) {
      console.log('Using stored date range');
      // Parse the stored dateRange and convert dates back to Date objects
      const parsedDateRange = JSON.parse(storedDateRange, (key, value) => {
        if (key === 'from' || key === 'to') {
          return new Date(value);
        }
        return value;
      });
      return parsedDateRange;
    } else {
      console.log('No stored date range found, using default');
      const defaultDaysAgo = 7;
      return {
        from: subDays(new Date(), defaultDaysAgo),
        to: new Date()
      };
    }
  });

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  // when dateRange is updated, cache it in the browser so that the selected range survives a restart,
  // and then reload the page with the newly selected date
  useEffect(() => {
    if (isValidDateRange(dateRange)) {
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('dateRange', JSON.stringify(dateRange));
      }

      // read/write object containing current search params
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set("from", dateRange.from)
      current.set("to", dateRange.to)

      // cast to string
      const search = current.toString();
      const query = search ? `?${search}` : "";

      // Navigate to the same page with new query parameters
      router.push(`${pathname}${query}`);
    }
  }, [dateRange]);

  // This handler will prevent errors when only 'to' or 'from' are selected
  const handleApplyClick = function (selected) {
    // if only one day is selected (from), set to and from to the same day
    console.log("Selected range: " + JSON.stringify(selected))
    if (selected) {
      if (! (selected?.to)) {
        selected.to = selected.from
      }
      // Set "to" date to end of day (23:59:59,999) instead of start
      selected.to.setHours(23, 59, 59, 999)
      console.log(`updating date to ${JSON.stringify(selected)}`)
      setDateRange(selected);  
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* <Badge variant="outline">Custom</Badge> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn("w-[240px] justify-start text-left font-normal rounded-full", !dateRange && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {/* {footer} */}
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(new Date(dateRange.from), "LLL dd, y")} -{" "}
                  {format(new Date(dateRange.to), "LLL dd, y")}
                </>
              ) : (
                format(new Date(dateRange.from), "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mr-16 rounded-2xl" align="start">

          <div className="flex">
            {/* <div className="flex flex-col gap-2 p-4">
              <Button className="rounded-full" variant="ghost" size="sm">Today</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Yesterday</Button>
              <Button className="rounded-full" variant="ghost" size="sm">This week</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last week</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 7 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 28 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 30 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 90 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 12 months</Button>
              <Button className="rounded-full" variant="secondary" size="sm">Custom</Button>
            </div> */}
            <Calendar initialFocus mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={handleApplyClick} required numberOfMonths={1} min={2} />
          </div>
          <div className="flex items-center justify-between p-4 mx-4 border-t">
            <div className="text-sm"><strong className="font-semibold">Range:</strong> {getDaysBetweenDates(dateRange)} days</div>
          </div>

        </PopoverContent>
      </Popover>
    </div>
  )
}
