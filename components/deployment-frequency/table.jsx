'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CalendarCheck, Blocks, Fingerprint } from "lucide-react"
import { dateFormatter } from '@/lib/date-funcs';

export function DeploymentFrequencyTable({ appName, dfData }) {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Deployment Name</TableHead>
          <TableHead>Image Sha</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {dfData.map (({ image, timestamp }) => (
          <TableRow key={image}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Blocks className="w-4 h-4" />{appName}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4" /> {image}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4" /> { dateFormatter(timestamp) }
              </div>
            </TableCell>
          </TableRow>
        ))}
     </TableBody>
    </Table>
  )
}