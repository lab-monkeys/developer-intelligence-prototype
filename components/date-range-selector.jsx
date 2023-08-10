"use client"

import { useState } from 'react'
import { addDays, subDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function DateRangeSelector() {

  const [date, setDate] = useState({
    from: new Date("June 29, 2023"),
    to: new Date("July 26, 2023"),
  })

  console.log(date)

  const convertMsToDays = ms => {
    const msInOneSecond = 1000
    const secondsInOneMinute = 60
    const minutesInOneHour = 60
    const hoursInOneDay = 24

    const minutesInOneDay = hoursInOneDay * minutesInOneHour
    const secondsInOneDay = secondsInOneMinute * minutesInOneDay
    const msInOneDay = msInOneSecond * secondsInOneDay

    return Math.ceil(ms / msInOneDay)
  }

  const getDaysBetweenDates = (dateOne, dateTwo) => {
    let differenceInMs = dateTwo.getTime() - dateOne.getTime()

    if (differenceInMs < 0) {
      differenceInMs = dateOne.getTime() - dateTwo.getTime()
    }

    return convertMsToDays(differenceInMs + 1)
  }

  return (
    <div className="flex items-center gap-4">
      <Badge variant="outline">Custom</Badge>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn("w-[240px] justify-start text-left font-normal rounded-full", !date && "text-muted-foreground")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
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
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mr-16 rounded-2xl" align="start">

          <div className="flex">
            <div className="flex flex-col gap-2 p-4">
              <Button className="rounded-full" variant="ghost" size="sm">Today</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Yesterday</Button>
              <Button className="rounded-full" variant="ghost" size="sm">This week</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last week</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 7 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 28 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 30 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 90 days</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Last 12 months</Button>
              <Button className="rounded-full" variant="ghost" size="sm">Custom</Button>
            </div>
            <Calendar initialFocus mode="range" defaultMonth={date?.from} toDate={new Date()} selected={date} onSelect={setDate} numberOfMonths={2} disabled />
          </div>
          <div className="flex items-center justify-between p-4 mx-4 border-t">
            <div className="text-sm"><strong className="font-semibold">Range:</strong> 28 days</div>
            <div className="flex items-center gap-2">
              <Button className="rounded-full" variant="secondary">Cancel</Button>
              <Button className="rounded-full">Apply</Button>
            </div>
          </div>

        </PopoverContent>
      </Popover>
    </div>
  )
}
