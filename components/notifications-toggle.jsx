'use client'

import { Toggle } from '@/components/ui/toggle'
import { Bell } from "lucide-react"

export function NotificationsToggle() {
  return (
    <Toggle aria-label="Toggle notifications" disabled>
      <Bell className="w-6 h-6" />
    </Toggle>
  )
}