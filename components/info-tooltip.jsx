'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export function InfoTooltip(props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info className="w-4 h-4 dark:stroke-white" />
        </TooltipTrigger>
        <TooltipContent>
          {props.label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}