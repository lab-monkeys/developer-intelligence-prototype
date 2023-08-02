"use client"

import { useState } from 'react'
import { Check, ChevronsUpDown, Github, Gitlab } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

const repositories = [
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

export function CodeRepoSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between rounded-full">
          {value && repositories.find((repository) => repository.value === value)?.label}
          {!value && 'Select repository...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={'left'} className="w-[320px] p-0">
        <Command>
          <CommandInput placeholder="Search repository..." />
          <CommandEmpty>No repository found.</CommandEmpty>
          <CommandGroup>
            {repositories.map((repository) => (
              <CommandItem key={repository.value} onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}>
                <Check className={cn("mr-2 h-4 w-4", value === repository.value ? "opacity-100" : "opacity-0")} />
                <repository.icon className={cn("mr-2 w-4 h-4", repository.value === value ? "opacity-100" : "opacity-40")} />
                {repository.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
