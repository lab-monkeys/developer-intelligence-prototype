'use client'

import { Button } from '../ui/button'

export function ScorecardAnalysis({ data }) {

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="grow">
        <h2 className="flex items-center font-semibold dark:text-white mb-2">Report analysis <div className="px-2 ml-2 bg-black rounded-full text-xs text-white font-semibold dark:bg-white dark:text-black">AI</div></h2>
        <p className="text-neutral-700 dark:text-neutral-300">The software demonstrated exceptional performance, executing complex tasks swiftly while maintaining responsiveness and efficiency throughout.</p>
      </div>
      <Button variant="secondary" className="rounded-full whitespace-nowrap">View full report</Button>
    </div>
  )
}