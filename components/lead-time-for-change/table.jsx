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

export function LeadTimeForChangeTable({ appName }) {
  
  const [ltfcData, setLtfcData] = useState('')
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
        {/* {ltfcData.map((ltfc) => (
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> {ltfc.commit}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> {ltfc.timestamp}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4" /> {ltfc.lead_time}
              </div>
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  )
}