"use client"

import { Moon, Sun, Monitor, Check } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full px-3 rounded-full" variant="ghost" size="icon">
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center justify-between" onClick={() => setTheme('light')}>
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2" />
            <span>Light theme</span>
          </div>
          <Check className={cn("mx-2 h-4 w-4", theme === 'light' ? "opacity-100" : "opacity-0")} />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between" onClick={() => setTheme('dark')}>
          <div className="flex items-center">
            <Moon className="h-4 w-4 mr-2" />
            <span>Dark theme</span>
          </div>
          <Check className={cn("mx-2 h-4 w-4", theme === 'dark' ? "opacity-100" : "opacity-0")} />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between" onClick={() => setTheme('system')}>
          <div className="flex items-center">
            <Monitor className="h-4 w-4 mr-2" />
            <span>Use device theme</span>
          </div>
          <Check className={cn("mx-2 h-4 w-4", theme !== 'light' && theme !== 'dark' ? "opacity-100" : "opacity-0")} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
