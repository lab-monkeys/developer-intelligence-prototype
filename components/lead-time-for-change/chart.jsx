'use client'

import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown, Clock4 } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { LeadTimeForChangeTooltip } from './tooltip'
import { LeadTimeForChangeRating } from './rating'
import { LeadTimeForChangeOptions } from './options'

const data = [
  {
    "Date": "Jun 30",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [4, 20],
  },
  {
    "Date": "Jul 1",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 9,
    "Expected range": [6, 15],
  },
  {
    "Date": "Jul 2",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 12,
    "Expected range": [8, 22],
  },
  {
    "Date": "Jul 3",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 14,
    "Expected range": [2, 11],
  },
  {
    "Date": "Jul 4",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [7, 13],
  },
  {
    "Date": "Jul 5",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 12,
    "Expected range": [10, 32],
  },
  {
    "Date": "Jul 6",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [4, 20],
  },
  {
    "Date": "Jul 7",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [4, 20],
  },
  {
    "Date": "Jul 8",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [4, 20],
  },
  {
    "Date": "Jul 9",
    "Average": 8,
    "Goal": 3,
    "Rolling average": 7,
    "Expected range": [4, 20],
  },
]

const animationDuration = 1000

export function LeadTimeForChangeChart() {

  const { resolvedTheme } = useTheme()

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
              <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">7 days, 13 hours</strong>
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
            <XAxis style={{ fontSize: '0.75rem' }} dataKey="Date" />
            <YAxis style={{ fontSize: '0.75rem' }} tickFormatter={tick => `${tick}d`} />
            <Tooltip content={<LeadTimeForChangeTooltip />} cursor={{ stroke: strokeCursor }} />
            <Area type="monotone" dataKey="Expected range" activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} fill={resolvedTheme === 'dark' ? fillRangeDark : fillRange} stroke={strokeRange} strokeWidth={1} strokeDasharray="4 4" animationDuration={animationDuration} />
            {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
            <Line type="monotone" dataKey="Rolling average" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeRollingAverage} strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} />
            <Line type="monotone" dataKey="Goal" dot={false} activeDot={resolvedTheme === 'dark' ? { stroke: strokeActiveDotDark } : { stroke: strokeActiveDot }} stroke={strokeGoal} strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round" isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}