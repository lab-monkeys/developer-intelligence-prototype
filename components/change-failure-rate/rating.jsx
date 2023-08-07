'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function ChangeFailureRateRating(props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full"><span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span> Fair</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 rounded-2xl" side="left">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold leading-none dark:text-white">Rating scale</h4>
            <p className="text-sm text-muted-foreground">How well you are performing at this metric</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span>Elite</span>
              </span>
              <span>0%-15%</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Strong</span>
              </span>
              <span>16%-30%</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4 font-semibold">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                <span>Fair</span>
              </span>
              <span>16%-30%</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span>Needs focus</span>
              </span>
              <span>16%-30%</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}