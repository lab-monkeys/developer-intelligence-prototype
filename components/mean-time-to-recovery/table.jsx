'use client'

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

export function MeanTimeToRecoveryTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Failed deployment</TableHead>
          <TableHead>Pull request</TableHead>
          <TableHead>Mean time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Globe className="w-4 h-4" /> project-crimson-prototype-q6yb8whv
            </div>
            <div className="mt-2 text-neutral-700">Jul 19, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Feature/authentication
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
            <div className="mt-2 text-neutral-700">Jul 26, 2023</div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4" />
              8 days
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Ready</div></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}