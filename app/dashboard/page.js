import { ApplicationSelector } from '@/components/application-selector'
import { DateRangeSelector } from '@/components/date-range-selector'
import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { LeadTimeForChangeChart } from '@/components/lead-time-for-change/chart'
import { DeploymentFrequencyChart } from '@/components/deployment-frequency/chart'
import { ChangeFailureRateChart } from '@/components/change-failure-rate/chart'
import { MeanTimeToRecoveryChart } from '@/components/mean-time-to-recovery/chart'
import { SearchToggle } from '@/components/search-toggle'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { AppLogo } from '@/components/app-logo'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default async function Page() {

  const session = await getServerSession(options)

  if (!session) {
    redirect('/')
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center px-16 py-16">
        <AppLogo />
        <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
        <div className="flex justify-end items-center gap-8">
          <div className="flex justify-end items-center gap-2">
            <SearchToggle />
            <NotificationsToggle />
            <ThemeToggle />
          </div>          
          <UserNav user={session.user} />
        </div>
      </header>

      <main className="flex flex-col h-full p-16 pt-0">
        <div className="flex justify-between items-center">
          <ApplicationSelector />
          <DateRangeSelector />
        </div>

        <div className="h-full grid grid-cols-2 grid-rows-2 gap-8 mt-8">
          <DeploymentFrequencyChart />
          <LeadTimeForChangeChart />
          <ChangeFailureRateChart />
          <MeanTimeToRecoveryChart />
        </div>
      </main>
    </div>
  )
}