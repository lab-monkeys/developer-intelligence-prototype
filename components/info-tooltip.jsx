'use client'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export function InfoTooltip(props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info className="w-4 h-4" />
        </TooltipTrigger>
        <TooltipContent>
          {props.label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}