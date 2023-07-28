import dynamic from 'next/dynamic'
import Image from 'next/image'

import { CodeRepoSelector } from '@/components/code-repo-selector'
import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'
import { ChartLeadTime } from '@/components/chart-lead-time'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <div className=" h-full">

      <header className="flex justify-between items-center px-16 py-16">
        <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
        <div className="flex justify-end items-center gap-4">
          <NotificationsToggle />
          <UserNav />
        </div>
      </header>

      <main className="p-16">

        <div className="flex justify-between items-center">
          <CodeRepoSelector />
          <div>Date picker component</div>
        </div>

        <div className="mt-8">
          <ChartLeadTime />
        </div>
      </main>
    </div>
  )
}