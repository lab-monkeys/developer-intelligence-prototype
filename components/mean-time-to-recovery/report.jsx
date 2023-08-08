'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'
import { format } from 'date-fns'

function toSentence(str) {
  return str.split(/([A-Z]|\d)/).map((v, i, arr) => {
    if (!i) return v.charAt(0).toUpperCase() + v.slice(1)
    if (!v) return v
    if (v === '_') return " "
    if (v.length === 1 && v === v.toUpperCase()) {
      const previousCapital = !arr[i - 1] || arr[i - 1] === '_'
      const nextWord = i + 1 < arr.length && arr[i + 1] && arr[i + 1] !== '_'
      const nextTwoCapitalsOrEndOfString = i + 3 > arr.length || !arr[i + 1] && !arr[i + 3]
      if (!previousCapital || nextWord) v = " " + v
      if (nextWord || (!previousCapital && !nextTwoCapitalsOrEndOfString)) v = v.toLowerCase()
    }
    return v
  }).join("")
}

export const MeanTimeToRecoveryReport = ({ reportMeanTimeToRecoveryData, showReportMeanTimeToRecoveryData, setShowReportMeanTimeToRecoveryData }) => {

  function handleClick() {
    setShowReportMeanTimeToRecoveryData(false)
  }

  return (
    <>
      <div data-state={showReportMeanTimeToRecoveryData ? 'open' : 'closed'} role="dialog" className="fixed z-50 gap-4 bg-background p-8 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 top-8 right-8 h-[calc(100%-4rem)] w-3/4 rounded-2xl border-l data-[state=closed]:slide-out-to-right data-[state=closed]:opacity-0 data-[state=closed]:pointer-events-none data-[state=open]:slide-in-from-right sm:max-w-xl">
        <div className="flex flex-col space-y-2 mb-8 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-foreground">Report - {reportMeanTimeToRecoveryData && format(new Date(reportMeanTimeToRecoveryData?.activeLabel), "MMM d, y")}</h2>
          <p className="text-sm text-muted-foreground">Detailed application report and analysis for this day</p>
        </div>
        <div className="mb-8">{`Change failure rate on this day... (tbd)`}</div>
        <div className="mb-8">
          <h3 className="mb-2 text-md font-semibold text-foreground">Details</h3>
          <div className="grid grid-cols-3 gap-2">
            {reportMeanTimeToRecoveryData && reportMeanTimeToRecoveryData?.activePayload.map((data, index) => (
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl" key={index}>
                <div className="text-xs text-neutral-600 dark:text-neutral-400"><span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: data.color }}></span>{toSentence(data.name)}</div>
                <div className="text-sm text-black font-semibold dark:text-white">{data.value instanceof Array ? data.value.join('-') : data.value} deployments</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center mb-2 text-md font-semibold text-foreground">Analysis <Badge className="ml-1 font-bold">AI</Badge></h3>
          <p className="mb-2 font-semibold">Dedicate more resources to completing requests.</p>
          <p>Typically, change lead times are extended by having too many manual processes or dedicating too few resources to completing requests. One way to bring lead times down is introducing more automation, if possible, but anything that increases the efficiency and speed at which the task can be completed will improve lead time. The efficiency of development can also be increased by having more regression unit tests, so any regressions introduced by code changes can be identified as early as possible.</p>
        </div>
        <Button variant="outline" size="icon" className="absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" onClick={handleClick}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div data-state={showReportMeanTimeToRecoveryData ? 'open' : 'closed'} className="fixed inset-0 z-40 bg-background/35 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:opacity-1 data-[state=closed]:opacity-0 data-[state=closed]:pointer-events-none" onClick={handleClick} />
    </>
  )
}