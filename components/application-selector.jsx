"use client"

import { useState, useContext } from 'react'
import { Check, ChevronsUpDown, Github, Gitlab, Box } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

const applications = [
  {
    value: "psc-ansible",
    label: "psc-ansible",
    icon: Gitlab,
  },
  {
    value: "pipeline-as-a-service",
    label: "pipeline-as-a-service",
    icon: Gitlab,
  },
  {
    value: "starchiver",
    label: "starchiver",
    icon: Gitlab,
  },
]

export function ApplicationSelector() {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-80 justify-between rounded-full">
          <div className="flex items-center">
            <Box className="mr-2 h-4 w-4 shrink-0" />
            {value && applications.find((application) => application.value === value)?.label}
            {!value && 'Select application...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={'left'} className="w-[320px] p-0 rounded-2xl overflow-hidden">
        <Command>
          <CommandInput placeholder="Search application..." />
          <CommandEmpty>No application found.</CommandEmpty>
          <CommandGroup>
            {applications.map((application) => (
              <CommandItem className="flex items-center justify-between" key={application.value} onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}>
                <div className="flex items-center">
                  <application.icon className={cn("mr-2 w-4 h-4", application.value === value ? "opacity-100" : "opacity-40")} />
                  {application.label}
                </div>
                <Check className={cn("mr-2 h-4 w-4", value === application.value ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <div className="p-2">
          <Button variant="secondary" className="w-full rounded-full" disabled>Customize</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
