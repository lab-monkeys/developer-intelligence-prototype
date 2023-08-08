'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export const ChangeFailureRateReport = ({ reportData, showReportData, setShowReportData }) => {

  function handleClick() {
    setShowReportData(false)
  }

  return (
    <div data-state={showReportData ? 'open' : 'closed'} role="dialog" className="fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 top-8 right-8 h-[calc(100%-4rem)] w-3/4 rounded-2xl border-l data-[state=closed]:slide-out-to-right data-[state=closed]:opacity-0 data-[state=closed]:pointer-events-none data-[state=open]:slide-in-from-right sm:max-w-xl">
      <div className="flex flex-col space-y-2 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-foreground">Edit profile</h2>
        <p className="text-sm text-muted-foreground">Make changes to your profile here. Click save when you are done.</p>
      </div>
      <div>
        <h3>Details</h3>
        <div>{reportData?.activeLabel}</div>
        <div>
          {reportData?.activePayload.map((data, index) => (
            <div key={index}>
              <div className="text-xs text-neutral-600 dark:text-neutral-400"><span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: data.color }}></span>{data.name}</div>
              <div className="text-sm text-black font-semibold dark:text-white">{data.value instanceof Array ? data.value.join('-') : data.value} deployments</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Analysis AI</h3>
        <p>Something...</p>
        <p>Something...</p>
      </div>
      <Button variant="outline" size="icon" className="absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" onClick={handleClick}>
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </div>
  )
}