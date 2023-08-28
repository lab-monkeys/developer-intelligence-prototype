import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchToggle } from '@/components/search-toggle'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { AppIcon } from '@/components/app-icon'
import { Dashboard } from '@/components/dashboard-alternate'
import { Cog, FileText, LayoutGrid, Users, Search, Bell, GitBranch } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

async function getData() {
  const response = await fetch('https://api.npoint.io/ee46484033b5d4d4658e')

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export default async function Page() {

  const session = await getServerSession(options)
  const data = await getData()

  if (!session) {
    redirect('/')
  }

  return (
    <>

      <header className="fixed left-0 top-0 flex flex-col justify-between items-center w-20 h-full p-4 bg-background shadow">
        <div className="flex items-center justify-center w-12 h-12 p-1">
          <AppIcon />
          <h1 className="visually-hidden">Red Hat Developer Intelligence</h1>
        </div>

        <nav>
          <ul className="flex flex-col gap-2">
            <li><Button className="h-14 rounded-full" variant="ghost"><Search /></Button></li>
            <li><Button className="h-14 rounded-full"><LayoutGrid /></Button></li>
            <li><Button className="h-14 rounded-full" variant="ghost"><FileText /></Button></li>
            <li><Button className="h-14 rounded-full" variant="ghost"><GitBranch /></Button></li>
            <li><Button className="h-14 rounded-full" variant="ghost"><Users /></Button></li>
            <li><Button className="h-14 rounded-full" variant="ghost"><Bell /></Button></li>
          </ul>
        </nav>

        <div className="flex flex-col justify-end items-center gap-8">
          <div className="flex flex-col justify-end items-center gap-2">
            <ThemeToggle />
            <Button className="rounded-full" variant="ghost"><Cog /></Button>
          </div>
          <UserNav user={session.user} />
        </div>
      </header>
      <div className="flex flex-col h-full ml-20">
        <Dashboard data={data} />
      </div>
    </>
  )
}