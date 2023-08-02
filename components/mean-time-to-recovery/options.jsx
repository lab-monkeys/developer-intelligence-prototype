'use client'

import { MoreVertical, Download, Image, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export function MeanTimeToRecoveryOptions(props) {
  return (
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
          <Image className="mr-2 h-4 w-4" />
          <span>Export image</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Download className="mr-2 h-4 w-4" />
          <span>Download data</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}