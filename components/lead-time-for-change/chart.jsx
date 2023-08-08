'use client'

import { useTheme } from "next-themes"
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown, Clock4 } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { LeadTimeForChangeTooltip } from './tooltip'
import { LeadTimeForChangeRating } from './rating'
import { LeadTimeForChangeOptions } from './options'

const dateFormatter = date => {
  return format(new Date(date), "MMM d")
}

const calculateMean = data => {
  if (data.length < 1) {
    return
  }
  return data.reduce((prev, current) => prev + current) / data.length
}

export function LeadTimeForChangeChart({ data }) {

  const { resolvedTheme } = useTheme()
  const animationDuration = 1000

  // Chart colors
  const strokeGrid = '#d4d4d4'            // Neutral 300
  const strokeGridDark = '#404040'        // Neutral 700
  const strokeCursor = '#8b5cf6'          // Violet 500
  const strokeActiveDot = '#ffffff'       // White
  const strokeActiveDotDark = '#171717'   // Neutral 900

  const fillRange = '#ddd6fe'             // Violet 200
  const fillRangeDark = '#2e1065'         // Violet 950
  const strokeRange = '#8b5cf6'           // Violet 500
  const strokeRollingAverage = '#8b5cf6'  // Violet 500
  const strokeGoal = '#f59e0b'            // Amber 500

  // Calculate the mean
  const averages = data.map(element => {
    return element.rollingAverage
  })

  const chartMean = calculateMean(averages)

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Clock4 className="w-8 h-8 mr-6 stroke-violet-500" strokeWidth={1.5} />
          <div>
            <CardTitle className="flex items-center gap-2">
              <span className="text-base font-normal tracking-normal text-neutral-600 dark:text-neutral-400">Lead time for change</span>
              <InfoTooltip label={'The amount of time it takes for any change to get into production'} />
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">{parseFloat(chartMean).toFixed(2)} days</strong>
              <Badge variant="secondary"><TrendingUp className="h-4 w-4 mr-1" /> 16%</Badge>
            </CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LeadTimeForChangeRating />
          <LeadTimeForChangeOptions />
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={resolvedTheme === 'dark' ? strokeGridDark : strokeGrid} />
            <XAxis style={{ fontSize: '0.75rem' }} dataKey="date" tickFormatter={dateFormatter} />
            <YAxis style={{ fontSize: '0.75rem' }} domain={[0, 28]} tickFormatter={tick => `${tick}d`} />
            <Tooltip content={<LeadTimeForChangeTooltip />} cursor={{ stroke: strokeCursor }} />
            <Area type="monotone" dataKey="expectedRange" activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} fill={resolvedTheme === 'dark' ? fillRangeDark : fillRange} stroke={strokeRange} strokeWidth={0} strokeDasharray="4 4" animationDuration={animationDuration} />
            {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
            <Line type="monotone" dataKey="rollingAverage" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeRollingAverage} strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} />
            <Line type="monotone" dataKey="goal" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeGoal} strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round" isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}