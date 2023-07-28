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
    from: subDays(new Date(), 28),
    to: new Date(),
  })

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
  
    return convertMsToDays(differenceInMs)
  }

  return (
    <div className="flex items-center gap-4">
      <Badge>{getDaysBetweenDates(date.from, date.to)} days</Badge>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn( "w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground" )}>
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
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
