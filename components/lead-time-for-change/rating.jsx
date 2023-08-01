'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function LeadTimeForChangeRating(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full"><span className="inline-block w-2 h-2 rounded-full bg-red-500"></span> Low performance</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" side="left">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold leading-none">Rating scale</h4>
            <p className="text-sm text-muted-foreground">How well you are performing at this metric</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span>Elite</span>
              </span>
              <span className="col-span-2">Less than 1 day</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                <span>High</span>
              </span>
              <span className="col-span-2">1 day - 1 week</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                <span>Medium</span>
              </span>
              <span className="col-span-2">1 week - 1 month</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4 font-semibold">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span>Low</span>
              </span>
              <span className="col-span-2">1 month - 6 months</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}