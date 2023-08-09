'use client'

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function DeploymentFrequencyRating({ chartMean, props }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full">
          {chartMean >= 2 && <><span className="inline-block w-2 h-2 rounded-full bg-green-500"></span><span>Elite</span></>}
          {chartMean < 2 && chartMean >= 0.14285714285 && <><span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span><span>Strong</span></>}
          {chartMean < 0.14285714285 && chartMean >= 0.03571428570 && <><span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span><span>Fair</span></>}
          {chartMean < 0.03571428570 && <><span className="inline-block w-2 h-2 rounded-full bg-red-500"></span><span>Needs focus</span></>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 rounded-2xl" side="left">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold leading-none dark:text-white">Rating scale</h4>
            <p className="text-sm text-muted-foreground">How well you are performing at this metric</p>
          </div>
          <div className="grid gap-2">
            <div className={`grid grid-cols-2 items-center gap-4 ${chartMean >= 2 ? 'font-semibold' : ''}`}>
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span>Elite</span>
              </span>
              <span>2+ each day</span>
            </div>
            <div className={`grid grid-cols-2 items-center gap-4 ${chartMean < 2 && chartMean >= 0.14285714285 ? 'font-semibold' : ''}`}>
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Strong</span>
              </span>
              <span>1 each day - 1 each week</span>
            </div>
            <div className={`grid grid-cols-2 items-center gap-4 ${chartMean < 0.14285714285 && chartMean ? 'font-semibold' : ''}`}>
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                <span>Fair</span>
              </span>
              <span>1 week - 1 month</span>
            </div>
            <div className={`grid grid-cols-2 items-center gap-4 ${chartMean < 0.03571428570 ? 'font-semibold' : ''}`}>
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                <span>Needs focus</span>
              </span>
              <span>1 month or longer</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}