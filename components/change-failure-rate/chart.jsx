'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label, ReferenceLine } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown, XCircle, AlertTriangle } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { ChangeFailureRateTooltip } from './tooltip'
import { ChangeFailureRateRating } from './rating'
import { ChangeFailureRateOptions } from './options'
import { ChangeFailureRateReport } from './report'

const dateFormatter = date => {
  return format(new Date(date), "MMM d")
}

export function ChangeFailureRateChart({ data }) {

  const { resolvedTheme } = useTheme()
  const animationDuration = 1000

  // Chart colors
  const strokeGrid = '#d4d4d4'            // Neutral 300
  const strokeGridDark = '#404040'        // Neutral 700
  const strokeCursor = '#f43f5e'          // Rose 500
  const strokeActiveDot = '#ffffff'       // White
  const strokeActiveDotDark = '#171717'   // Neutral 900

  const fillRange = '#fecdd3'             // Rose 200
  const fillRangeDark = '#4c0519'         // Rose 950
  const strokeRange = '#f43f5e'           // Rose 500
  const strokeRollingAverage = '#f43f5e'  // Rose 500
  const strokeGoal = '#f59e0b'            // Amber 500

  const [reportData, setReportData] = useState()
  const [showReportData, setShowReportData] = useState(false)

  function handleChartClick(event) {
    // setReportData(event)
    // setShowReportData(true)
  }

  const customAnomalyLabel = ({ viewBox: { x, y } }) => {
    const d = 20
    const r = d / 2

    const transform = `translate(${x - r} ${y - d - 5})` 

    return (
      <g transform={transform}>
        <AlertTriangle />
      </g>
    )
  }

  return (
    <>
      <Card className="flex flex-col h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <XCircle className="w-8 h-8 mr-6 stroke-rose-500" strokeWidth={1.5} />
            <div>
              <CardTitle className="flex items-center gap-2">
                <span className="text-base font-normal tracking-normal text-neutral-600 dark:text-neutral-400">Change failure rate</span>
                <InfoTooltip label={'The percentage of deployments causing a failure in production'} />
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">25%</strong>
                <Badge variant="secondary"><MoveRight className="h-4 w-4 mr-1" /> 0%</Badge>
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ChangeFailureRateRating />
            <ChangeFailureRateOptions />
          </div>
        </CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }} onClick={handleChartClick}>
              <CartesianGrid vertical={false} stroke={resolvedTheme === 'dark' ? strokeGridDark : strokeGrid} />
              <XAxis style={{ fontSize: '0.75rem' }} dataKey="date" tickFormatter={dateFormatter} />
              <YAxis style={{ fontSize: '0.75rem' }} domain={[0, 100]} tickFormatter={tick => `${tick}%`} />
              <Tooltip content={<ChangeFailureRateTooltip />} cursor={{ stroke: strokeCursor }} />
              <Area type="monotone" dataKey="expectedRange" activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} fill={resolvedTheme === 'dark' ? fillRangeDark : fillRange} stroke={strokeRange} strokeWidth={0} strokeDasharray="4 4" animationDuration={animationDuration} />
              {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
              <Line type="monotone" dataKey="rollingAverage" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeRollingAverage} strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} />
              <Line type="monotone" dataKey="goal" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeGoal} strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round" isAnimationActive={false} />
              <ReferenceLine x={"Jul 7"} strokeWidth={1}>
                <Label content="Anomaly" />
              </ReferenceLine>
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <ChangeFailureRateReport reportData={reportData} showReportData={showReportData} setShowReportData={setShowReportData} />
    </>
  )
}