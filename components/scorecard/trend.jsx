'use client'

import { AreaChart, Area, ResponsiveContainer, ReferenceLine } from 'recharts'
import { useTheme } from "next-themes"

export function ScorecardTrend({ data }) {

  const { resolvedTheme } = useTheme()

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={300} height={100} data={data.data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
              <stop offset="95%" stopColor={resolvedTheme === 'dark' ? "#172554" : "#eff6ff"} stopOpacity={0.25} />
            </linearGradient>
          </defs>
          <ReferenceLine y={100} stroke={resolvedTheme === 'dark' ? "#1d4ed8" : "#93c5fd"} strokeDasharray="2 2" />
          <ReferenceLine y={50} stroke={resolvedTheme === 'dark' ? "#1d4ed8" : "#93c5fd"} strokeDasharray="2 2" />
          <ReferenceLine y={0} stroke={resolvedTheme === 'dark' ? "#1d4ed8" : "#93c5fd"} strokeDasharray="2 2" />
          <Area type="monotone" dataKey="projected" stroke="#3b82f6" strokeWidth={2} strokeDasharray="4 4" fill="none" />
          <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}