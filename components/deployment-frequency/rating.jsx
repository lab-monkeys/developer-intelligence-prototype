'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function DeploymentFrequencyRating(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full"><span className="inline-block w-2 h-2 rounded-full bg-red-500"></span> Low performance</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" side="left">
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
              <span className="col-span-2">2+ each day</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                <span>High</span>
              </span>
              <span className="col-span-2">1 each day - 1 each week</span>
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
              <span className="col-span-2">1 month or longer</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}