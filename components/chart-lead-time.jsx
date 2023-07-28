'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line } from 'recharts'

const data = [
  {
    date: "Jun 30",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [4, 20],
  },
  {
    date: "Jul 1",
    average: 8,
    goal: 3,
    rolling_average: 9,
    expected_range: [6, 15],
  },
  {
    date: "Jul 2",
    average: 8,
    goal: 3,
    rolling_average: 12,
    expected_range: [8, 22],
  },
  {
    date: "Jul 3",
    average: 8,
    goal: 3,
    rolling_average: 14,
    expected_range: [2, 11],
  },
  {
    date: "Jul 4",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [7, 13],
  },
  {
    date: "Jul 5",
    average: 8,
    goal: 3,
    rolling_average: 12,
    expected_range: [10, 32],
  },
  {
    date: "Jul 6",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [4, 20],
  },
  {
    date: "Jul 7",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [4, 20],
  },
  {
    date: "Jul 8",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [4, 20],
  },
  {
    date: "Jul 9",
    average: 8,
    goal: 3,
    rolling_average: 7,
    expected_range: [4, 20],
  },
]

export function ChartLeadTime() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chart: Lead time for change</CardTitle>
        <CardDescription>7 days, 13 hours <span>16%</span></CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data} margin={{ top: 24, right: 48, left: 24, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#CFD8DC" />
            <XAxis label="Calendar date" dataKey="date" />
            <YAxis label={{ value: 'Completion time (days)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="right" />
            <Area type="monotone" dataKey="expected_range" fill="#ECEFF1" stroke="#ECEFF1" />
            <Line type="monotone" dataKey="goal" dot={false} stroke="#263238" strokeWidth={2} strokeDasharray="2 2" />
            <Line type="monotone" dataKey="average" dot={false} stroke="#263238" strokeWidth={3} strokeLinecap="round" />
            <Line type="monotone" dataKey="rolling_average" dot={false} stroke="#263238" strokeWidth={3} strokeDasharray="4 8" strokeLinecap="round" />
            
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}