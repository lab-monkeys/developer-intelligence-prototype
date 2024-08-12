//components/change-failure-rate/changeFailureRate.js

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Orbit, CalendarCheck, Ticket } from "lucide-react"
import { dateFormatter, dayFormatter } from '@/lib/date-funcs';

export function ChangeFailureRateTable({ cfrData, appName }) {

  // const { cfrData, loading } = useChangeFailureRate(appName, dateRange);
  // console.log('Table cfrData: ', cfrData)

  // if (loading) {
  //   return <div>Loading...</div>; // Render loading state while data is being fetched
  // }

  if (!cfrData || cfrData.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ticket Reference</TableHead>
          <TableHead>App Name</TableHead>
          <TableHead>Date Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {cfrData.map (({ issue_id, timestamp }) => (
          <TableRow key={issue_id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />{issue_id}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Orbit className="w-4 h-4" />{appName}
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