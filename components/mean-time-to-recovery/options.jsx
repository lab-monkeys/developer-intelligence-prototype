'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { MoreVertical, Download, Image as ImageIcon, Maximize2, Goal, Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export function MeanTimeToRecoveryOptions(props) {

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
          <DialogDescription>Mean time to recovery</DialogDescription>
        </DialogHeader>
        <div>
          <div className="mb-6">
            <Label htmlFor="mean-time-to-recovery-goal">What is your desired deployment frequency?</Label>
            <Slider id="mean-time-to-recovery-goal" defaultValue={[1]} max={2} step={1} className="py-4" />
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>0</span>
              <span>1</span>
              <span>2</span>
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
          <div className="flex items-center mb-6">
            <div>Current</div>
            <div>Goal</div>
          </div>
          <div className="px-4 py-2 mb-6 border border-dashed border-neutral-300 rounded-lg text-center dark:border-neutral-700">Plan of action...</div>
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