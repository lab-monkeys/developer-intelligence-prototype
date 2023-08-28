'use client'

import { Zap } from "lucide-react"

export function ScorecardScore({ data }) {

  return (
    <div className="grid grid-cols-4 items-center gap-4 h-full">
      <div className="col-span-3 flex flex-col justify-between h-full">
        <div className="flex items-center gap-2"><Zap className="w-4 h-4 fill-white" /> Current score</div>
        <div className="relative h-2 bg-blue-600 rounded-full">
          <span className={`absolute top-0 left-0 block w-0 h-full bg-white rounded-full transition-all`} style={{ width: data.current + '%' }}></span>
        </div>
        <div className="font-semibold">Strong</div>
      </div>
      <div className="col-span-1 text-center">
        <div className="font-bold text-4xl">{data.current}%</div>
      </div>
    </div>
  )
}