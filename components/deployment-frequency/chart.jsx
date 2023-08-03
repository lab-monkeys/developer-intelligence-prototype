'use client'

import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { DeploymentFrequencyTooltip } from './tooltip'
import { DeploymentFrequencyRating } from './rating'
import { DeploymentFrequencyOptions } from './options'

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

export function DeploymentFrequencyChart() {

  const { resolvedTheme } = useTheme()

  // Chart colors
  const strokeGrid = '#d4d4d4'            // Neutral 300
  const strokeGridDark = '#404040'        // Neutral 700
  const strokeCursor = '#3b82f6'          // Blue 500

  const fillRange = '#bfdbfe'             // Blue 200
  const fillRangeDark = '#172554'         // Blue 950
  const strokeRange = '#3b82f6'           // Blue 500
  const strokeRollingAverage = '#3b82f6'  // Blue 500
  const strokeGoal = '#f59e0b'            // Amber 500

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <span className="text-base font-normal tracking-normal text-neutral-600 dark:text-neutral-400">Deployment frequency</span>
            <InfoTooltip label={'How often an organization successfully releases to production'} />
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <strong className="text-black text-2xl font-semibold tracking-tight dark:text-white">0.07 per day</strong>
            <Badge variant="secondary"><TrendingDown className="h-4 w-4 mr-1" /> 16%</Badge>
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <DeploymentFrequencyRating />
          <DeploymentFrequencyOptions />
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={resolvedTheme === 'dark' ? strokeGridDark : strokeGrid} />
            <XAxis style={{ fontSize: '0.75rem' }} dataKey="Date" />
            <YAxis style={{ fontSize: '0.75rem' }} />
            <Tooltip content={<DeploymentFrequencyTooltip />} cursor={{ stroke: strokeCursor }} />
            <Area type="monotone" dataKey="Expected range" fill={resolvedTheme === 'dark' ? fillRangeDark : fillRange} stroke={strokeRange} strokeWidth={0} strokeDasharray="4 2" animationDuration={animationDuration} />           
            {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
            <Line type="monotone" dataKey="Rolling average" dot={false} stroke={strokeRollingAverage} strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} />
            <Line type="monotone" dataKey="Goal" dot={false} stroke={strokeGoal} strokeWidth={2} strokeDasharray="4 4" strokeLinecap="round" isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}