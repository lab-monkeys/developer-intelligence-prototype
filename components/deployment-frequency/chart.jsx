'use client'

import { useState } from 'react'
import { useTheme } from "next-themes"
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label, ReferenceLine } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown, Rocket  } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { DeploymentFrequencyTooltip } from './tooltip'
import { DeploymentFrequencyRating } from './rating'
import { DeploymentFrequencyOptions } from './options'
import { DeploymentFrequencyReport } from "./report"

const dateFormatter = date => {
  return format(new Date(date), "MMM d")
}

const calculateMean = data => {
  if (data.length < 1) {
    return
  }
  return data.reduce((prev, current) => prev + current) / data.length
}

export function DeploymentFrequencyChart({ data }) {

  const { resolvedTheme } = useTheme()
  const animationDuration = 1000

  // Chart colors
  const strokeGrid = '#d4d4d4'            // Neutral 300
  const strokeGridDark = '#404040'        // Neutral 700
  const strokeCursor = '#3b82f6'          // Blue 500
  const strokeActiveDot = '#ffffff'       // White
  const strokeActiveDotDark = '#171717'   // Neutral 900
  const strokeAnomaly = '#f97316'         // Orange 500

  const fillRange = '#bfdbfe'             // Blue 200
  const fillRangeDark = '#172554'         // Blue 950
  const strokeRange = '#3b82f6'           // Blue 500
  const strokeRollingAverage = '#3b82f6'  // Blue 500
  const strokeGoal = '#f59e0b'            // Amber 500

  // Calculate the mean
  const averages = data.map(element => {
    return element.rollingAverage
  })

  const chartMean = calculateMean(averages)

  // Reports
  const [reportDeploymentFrequencyData, setReportDeploymentFrequencyData] = useState(null)
  const [showReportDeploymentFrequencyData, setShowReportDeploymentFrequencyData] = useState(false)

  function handleChartClick(event) {
    setReportDeploymentFrequencyData(event)
    setShowReportDeploymentFrequencyData(true)
  }

  // Anomaly detection
  const showAnomalyWarning = data.some((day) => {
    if (day.rollingAverage < day.expectedRange[0] || day.rollingAverage > day.expectedRange[1]) { return true }
    return false
  })

  return (
    <>
      <Card className="flex flex-col h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <Rocket className="w-8 h-8 mr-6 stroke-blue-500" strokeWidth={1.5} />
            <div>
              <CardTitle className="flex items-center gap-2">
                <span className="text-base font-normal tracking-normal text-neutral-600 dark:text-neutral-400">Deployment frequency</span>
                <InfoTooltip label={'How often an organization successfully releases to production'} />
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">{parseFloat(chartMean).toFixed(2)} per day</strong>
                <Badge variant="secondary"><TrendingDown className="h-4 w-4 mr-1" /> 16%</Badge>
                {showAnomalyWarning && <Badge className="text-orange-600 border-orange-600" variant="outline">Anomaly detected</Badge>}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DeploymentFrequencyRating />
            <DeploymentFrequencyOptions />
          </div>
        </CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 0, left: 0, right: 4, bottom: 0 }} onClick={handleChartClick}>
              <CartesianGrid vertical={false} stroke={resolvedTheme === 'dark' ? strokeGridDark : strokeGrid} />
              <XAxis style={{ fontSize: '0.75rem' }} dataKey="date" axisLine={false} tickLine={false} tickFormatter={dateFormatter} />
              <YAxis style={{ fontSize: '0.75rem' }} domain={[0, 20]} axisLine={false} tickLine={false} />
              <Tooltip content={<DeploymentFrequencyTooltip />} cursor={{ stroke: strokeCursor }} />
              <Area type="monotone" dataKey="expectedRange" activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} fill={resolvedTheme === 'dark' ? fillRangeDark : fillRange} stroke={strokeRange} strokeWidth={0} strokeDasharray="4 4" animationDuration={animationDuration} />
              {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
              <Line type="monotone" dataKey="rollingAverage" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeRollingAverage} strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} />
              <Line type="monotone" dataKey="goal" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeGoal} strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round" isAnimationActive={false} />

              {data.map((day, index) => (
                day.rollingAverage < day.expectedRange[0] || day.rollingAverage > day.expectedRange[1] && (
                  <ReferenceLine key={index} x={day.date} stroke={strokeAnomaly} strokeDasharray="2 2" />
                )
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <DeploymentFrequencyReport reportDeploymentFrequencyData={reportDeploymentFrequencyData} showReportDeploymentFrequencyData={showReportDeploymentFrequencyData} setShowReportDeploymentFrequencyData={setShowReportDeploymentFrequencyData} />
    </>
  )
}