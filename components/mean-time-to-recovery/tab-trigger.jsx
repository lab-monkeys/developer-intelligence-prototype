'use client'

import { PackageCheck, ArrowDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { InfoTooltip } from '@/components/info-tooltip'
import { MeanTimeToRecoveryRating } from './rating'
import { useState } from "react"

export function MeanTimeToRecoveryTabTrigger({ data, appName }) {

  // Calculate the mean
  const calculateMean = data => {
    if (data.length < 1) {
      return
    }
    return data.reduce((prev, current) => prev + current) / data.length
  }

  const averages = data.map(element => {
    return element.rollingAverage
  })

  const [response, setResponse] = useState('')
  fetch(`${process.env.NEXT_PUBLIC_PELORUS_API_URL}/sdp/mean_time_to_restore/${appName}?range=1w`).then((test) => test.json()).then((data) => {setResponse(data)}).catch((error) => { console.log(error) })
  const chartMean = response.mttr / 86400

  // Anomaly detection
  const showAnomalyWarning = data.some((day) => {
    if (day.rollingAverage < day.expectedRange[0] || day.rollingAverage > day.expectedRange[1]) { return true }
    return false
  })

  return (
    <>
      <div className="flex items-center justify-between w-full mb-2">
        <PackageCheck className="w-6 h-6 stroke-emerald-500" />
        {showAnomalyWarning && <Badge className="text-orange-700 bg-orange-50 border-orange-700 dark:text-orange-400 dark:bg-orange-950 dark:border-orange-400" variant="outline">Anomaly detected</Badge>}
      </div>
      <h2 className="flex items-center gap-2">
        <span className="font-semibold text-base dark:text-white">Mean time to recovery</span>
        <InfoTooltip label={'How long does it take for an organization to recover from a failure in production'} />
      </h2>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">{parseFloat(chartMean).toFixed(2)} days</strong>
          <Badge variant="outline" className="px-1.5 bg-emerald-50 border-0 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><ArrowDown className="h-4 w-4 mr-1 stroke-emerald-700 dark:stroke-emerald-300" /> 16%</Badge>
        </div>
        <MeanTimeToRecoveryRating chartMean={chartMean} />
      </div>
    </>
  )
}