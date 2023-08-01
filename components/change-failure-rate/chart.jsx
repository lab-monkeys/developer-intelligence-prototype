'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label } from 'recharts'
import { MoveRight, TrendingUp, TrendingDown } from 'lucide-react'
import { InfoTooltip } from '@/components/info-tooltip'
import { ChangeFailureRateRating } from './rating'

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

const animationDuration = 3000

export function ChangeFailureRateChart() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <span className="text-base font-normal tracking-normal text-neutral-600">Change failure rate</span>
            <InfoTooltip label={'The percentage of deployments causing a failure in production'} />
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <strong className="text-black text-2xl font-semibold tracking-tight">25%</strong>
            <Badge variant="secondary"><MoveRight className="h-4 w-4 mr-1" /> 0%</Badge>
          </CardDescription>
        </div>
        <ChangeFailureRateRating />
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#CFD8DC" />
            <XAxis style={{ fontSize: '0.75rem' }} dataKey="Date" />
            <YAxis style={{ fontSize: '0.75rem' }} tickFormatter={tick => `${tick}%`} />
            <Tooltip />
            <Area type="monotone" dataKey="Expected range" fill="#fecdd3" stroke="#ffe4e6" strokeWidth={0} strokeDasharray="4 2" animationDuration={animationDuration} /> {/* Color: Rose 200 */}
            {/* <Line type="monotone" dataKey="Average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" /> */}
            <Line type="monotone" dataKey="Rolling average" dot={false} stroke="#f43f5e" strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} /> {/* Color: Rose 500 */}
            <Line type="monotone" dataKey="Goal" dot={false} stroke="#f59e0b" strokeWidth={3} strokeLinecap="round" animationDuration={animationDuration} /> {/* Color: Amber 500 */}            
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}