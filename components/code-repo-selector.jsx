"use client"

import { useState } from 'react'
import { Check, ChevronsUpDown, Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

const repositories = [
  {
    value: "next.js",
    label: "Next.js",
    icon: Github,
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    icon: Github,
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    icon: Github,
  },
  {
    value: "remix",
    label: "Remix",
    icon: Github,
  },
  {
    value: "astro",
    label: "Astro",
    icon: Github,
  },
]

export function CodeRepoSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value
            ? repositories.find((repository) => repository.value === value)?.label
            : "Select repository..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
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
