'use client'

import { Check } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertHealthy() {
  return (
    <Alert className="mb-8">
      <Check className="h-4 w-4 stroke-emerald-500" />
      <AlertTitle>Looks good!</AlertTitle>
      <AlertDescription>
        Data collected for this day looks to be within expected range.
      </AlertDescription>
    </Alert>
  )
}