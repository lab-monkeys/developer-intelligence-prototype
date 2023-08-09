'use client'

import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertAnomaly() {
  return (
    <Alert className="mb-8 bg-orange-50 dark:bg-orange-950 border-2 border-orange-500">
      <AlertTriangle className="h-4 w-4 stroke-orange-600 dark:stroke-orange-400" />
      <AlertTitle className="text-foreground">Anomaly detected!</AlertTitle>
      <AlertDescription>
        We detected an unusual pattern in the data we collected for this day. Immediate action is recommended.
      </AlertDescription>
    </Alert>
  )
}