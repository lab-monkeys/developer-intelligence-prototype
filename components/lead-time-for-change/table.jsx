'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Calendar, GitBranch, GitCommit, Globe, Timer } from "lucide-react"
import { format } from 'date-fns'

const dateFormatter = epoch => {
  const date = new Date(epoch * 1000)
  return format(new Date(date), "MMM d")
}

const dayFormatter = seconds => {
  const days = parseFloat(seconds / 86400).toFixed(2)
  return days + "d"
}

export function LeadTimeForChangeTable({ appName }) {
  
  const [ltfcData, setLtfcData] = useState( [])
  useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_PELORUS_API_URL}/sdp/lead_time_for_change/${appName}/data?range=1w`)
      .then((response) => response.json()).then((data) => data.sort((d1, d2) => (d1.timestamp > d2.timestamp) ? 1 : (d1.timestamp < d2.timestamp) ? -1 : 0 ))
      .then((sortedData) => {
        setLtfcData(sortedData)
      })
  }, [appName])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Commit SHA</TableHead>
          <TableHead>Commit Date</TableHead>
          <TableHead>Lead time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ltfcData.map (({ commit, timestamp, lead_time }) => (
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> {commit}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> { dateFormatter(timestamp) }
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4" /> {dayFormatter(lead_time)} days
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}