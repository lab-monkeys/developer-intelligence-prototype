'use client'

import { Toggle } from '@/components/ui/toggle'
import { Search } from 'lucide-react'

export function SearchToggle() {
  return (
    <Toggle aria-label="Toggle search" disabled>
      <Search className="w-6 h-6" />
    </Toggle>
  )
}