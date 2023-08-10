'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { MoreVertical, Download, Image as ImageIcon, Maximize2, Goal, Calendar as CalendarIcon, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function ChangeFailureRateOptions(props) {

  const [goal, setGoal] = useState(2)
  const [date, setDate] = useState()

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="rounded-full">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem disabled>
            <Maximize2 className="mr-2 h-4 w-4" />
            <span>View fullscreen</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <ImageIcon className="mr-2 h-4 w-4" />
            <span>Export image</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Download className="mr-2 h-4 w-4" />
            <span>Download data</span>
          </DropdownMenuItem>
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Goal className="mr-2 h-4 w-4" />
              <span>Edit goal</span>
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit goal</DialogTitle>
          <DialogDescription>Change failure rate</DialogDescription>
        </DialogHeader>
        <div>
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="change-failure-rate-goal">What is your desired change failure rate?</Label>
              <span className="text-sm font-semibold">{goal}%</span>
            </div>
            <Slider id="change-failure-rate-goal" defaultValue={[0]} value={[goal]} max={100} step={1} className="py-4" onValueChange={(value) => setGoal(value)} />
            <div className="grid grid-cols-3 items-center justify-between text-xs text-neutral-500">
              <span>0</span>
              <span className="flex justify-center">50</span>
              <span className="flex justify-end">100</span>
            </div>
          </div>
          <div className="mb-6">
            <Label>When would you like to achieve your goal by?</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] mt-4 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-2 mb-6">
            <div className="flex flex-col p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <span className="mb-2 text-sm font-semibold">Current average</span>
              <span className="text-sm">7 days</span>
              <span className="text-neutral-700 dark:text-neutral-500 text-xs">Today</span>
            </div>
            <div><MoveRight strokeWidth={1.5} /></div>
            <div className="flex flex-col p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
              <span className="mb-2 text-sm font-semibold">Goal</span>
              <span className="text-sm">7 days</span>
              <span className="text-neutral-700 dark:text-neutral-500 text-xs">{date ? format(date, "PPP") : 'No date selected'}</span>
            </div>
          </div>
          <div className="px-4 py-3 mb-6 border border-dashed border-neutral-300 rounded-lg text-sm text-center italic dark:border-neutral-700">Plan to decrease change failure rate by #% per week</div>
        </div>
        <DialogFooter className="w-full flex items-center lg:justify-between">
          <Button variant="outline" className="rounded-full">Clear goal</Button>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="rounded-full">Cancel</Button>
            <Button className="rounded-full">Apply</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}