"use client"

import { useState, useEffect } from 'react'
import { Check, ChevronsUpDown, Github, Gitlab, Box } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function AppSelector({ appList, activeApp }) {

  const [open, setOpen] = useState(false)
  const [app, setApp] = useState(activeApp)

  // when dateRange is updated, cache it in the browser so that the selected range survives a restart,
  // and then reload the page with the newly selected date
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  // when the user selects a different app, update the page with new params
  useEffect(() => {
    // read/write object containing current search params
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set("app", app)
    // cast to string
    const search = current.toString();
    const query = search ? `?${search}` : "";

    // Navigate to the same page with new query parameters
    router.push(`${pathname}${query}`);
  }, [app]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-80 justify-between rounded-full">
          <div className="flex items-center">
            <Box className="mr-2 w-4 h-4" />
            {app && appList.find((application) => application.app === app)?.app}
            {!app && 'Select application...'}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align={'left'} className="w-[320px] p-0 rounded-2xl overflow-hidden">
        <Command>
          <CommandInput placeholder="Search application..." />
          <CommandEmpty>No application found.</CommandEmpty>
          <CommandGroup>
            {appList.map((application) => (
              <CommandItem className="flex items-center justify-between" key={application.app} onSelect={(currentValue) => {
                setApp(currentValue)
                setOpen(false)
              }}>
                <div className="flex items-center">
                  <Box className={cn("mr-2 w-4 h-4", application.app === app ? "opacity-100" : "opacity-40")} />
                  <span className={`${app === application.app ? 'font-semibold' : 'font-base'}`}>{application.app}</span>
                </div>
                <Check className={cn("mr-2 h-4 w-4", app === application.app ? "opacity-100" : "opacity-0")} />
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
