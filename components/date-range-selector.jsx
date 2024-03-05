"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import 'react-day-picker/dist/style.css';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function getDaysBetweenDates(dateRange) {
  let differenceInMs = dateRange?.from ? (
    dateRange.to ? (
      dateRange.to.getTime() - dateRange.from.getTime()
    ) : (
      0
    )
  ) : (
    0
  )

  return convertMsToDays(differenceInMs + 1)
}

function convertMsToDays(ms) {
  const msInOneSecond = 1000
  const secondsInOneMinute = 60
  const minutesInOneHour = 60
  const hoursInOneDay = 24

  const minutesInOneDay = hoursInOneDay * minutesInOneHour
  const secondsInOneDay = secondsInOneMinute * minutesInOneDay
  const msInOneDay = msInOneSecond * secondsInOneDay

  return Math.ceil(ms / msInOneDay)
}

function isComplete(date) {
  if (date?.from) {
    if (date.to) {
      console.log("Date is complete")
      return true
    }
  }
  console.log("Date is not complete")
  return false
}

export function DateRangeSelector({date, setDate}) {

  let footer = <p>Please pick the first day.</p>;
  if (date?.from) {
    if (!date.to) {
      footer = <p>{format(date.from, 'PPP')}</p>;
    } else if (date.to) {
      footer = (
        <p>
          {format(date.from, 'PPP')}–{format(date.to, 'PPP')}
        </p>
      );
    }
  }

  // This handler will prevent errors when only 'to' or 'from' are selected
  const handleDateSelect = function (date) {
    if (isComplete(date)) {
      setDate(date)
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* <Badge variant="outline">Custom</Badge> */}
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn("w-[240px] justify-start text-left font-normal rounded-full", !date && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {footer}
            {/* {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )} */}
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
            <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={handleDateSelect} numberOfMonths={1} min={2} />
          </div>
          <div className="flex items-center justify-between p-4 mx-4 border-t">
            <div className="text-sm"><strong className="font-semibold">Range:</strong> {getDaysBetweenDates(date)} days</div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" variant="secondary">Cancel</Button>
              <Button className="rounded-full" onClick={setDate}>Apply</Button>
            </div>
          </div>

        </PopoverContent>
      </Popover>
    </div>
  )
}
