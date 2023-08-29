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
import { Calendar, GitBranch, GitCommit, Globe } from "lucide-react"

export function ChangeFailureRateTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Deployment name</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              project-crimson-prototype-q6yb8whv
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" /> Main
            </div>
            <div className="flex items-center gap-2 mt-2">
              <GitCommit className="w-4 h-4" /> <span className="font-medium">0577e50</span> Commit name description
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jul 26, 2023
            </div>
          </TableCell>
          <TableCell><div className="flex items-center gap-2"><div className="w-2 h-2 bg-rose-500 rounded-full"></div> Error</div></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}