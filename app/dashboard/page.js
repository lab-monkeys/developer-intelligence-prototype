import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchToggle } from '@/components/search-toggle'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import { AppLogo } from '@/components/app-logo'
import { Dashboard } from '@/components/dashboard'

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

      <Dashboard data={data} />
    </div>
  )
}