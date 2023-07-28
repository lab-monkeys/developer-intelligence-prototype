import dynamic from 'next/dynamic'
import Image from 'next/image'

import { CodeRepoSelector } from '@/components/code-repo-selector'
import { DateRangeSelector } from '@/components/date-range-selector'
import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'
import { ChartLeadTime } from '@/components/chart-lead-time'
import { SearchToggle } from '@/components/search-toggle'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <div className=" h-full">

      <header className="flex justify-between items-center px-16 py-16">
        <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
        <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
        <div className="flex justify-end items-center gap-8">
          <div className="flex justify-end items-center gap-2">
            <SearchToggle />
            <NotificationsToggle />
          </div>          
          <UserNav />
        </div>
      </header>

      <main className="p-16">

        <div className="flex justify-between items-center">
          <CodeRepoSelector />
          <DateRangeSelector />
        </div>

        <div className="mt-8">
          <ChartLeadTime />
        </div>
      </main>
    </div>
  )
}