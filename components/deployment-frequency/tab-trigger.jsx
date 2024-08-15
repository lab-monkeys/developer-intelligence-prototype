'use client'

import { Rocket, ArrowUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { InfoTooltip } from '@/components/info-tooltip'
import { getDaysBetweenDates } from '@/lib/date-funcs';

export function DeploymentFrequencyTabTrigger({ appName, data, dateRange }) {

  const chartMean = data.df / getDaysBetweenDates(dateRange)
  const percentChange = Math.round((data.df / data.last) * 100)

  // Anomaly detection
  // const showAnomalyWarning = data.some((day) => {
  //   if (day.rollingAverage < day.expectedRange[0] || day.rollingAverage > day.expectedRange[1]) { return true }
  //   return false
  // })

  return (
    <>
      <div className="flex items-center justify-between w-full mb-2">
        <Rocket className="w-6 h-6 stroke-blue-500" />
        {/* {showAnomalyWarning && <Badge className="text-orange-700 bg-orange-50 border-orange-700 dark:text-orange-400 dark:bg-orange-950 dark:border-orange-400" variant="outline">Anomaly detected</Badge>} */}
      </div>
      <h2 className="flex items-center gap-2">
        <span className="font-semibold text-base dark:text-white">Deployment frequency</span>
        <InfoTooltip label={'How often an organization successfully releases to production'} />
      </h2>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">{parseFloat(chartMean).toFixed(2)} per day</strong>
          <Badge variant="outline" className="px-1.5 bg-emerald-50 border-0 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><ArrowUp className="h-4 w-4 mr-1 stroke-emerald-700 dark:stroke-emerald-300" /> {percentChange}%</Badge>
        </div>
        {/* <DeploymentFrequencyRating chartMean={chartMean} /> */}
      </div>
    </>
  )
}