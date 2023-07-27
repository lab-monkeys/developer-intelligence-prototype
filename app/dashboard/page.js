import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'

import { CodeRepoSelector } from '@/components/code-repo-selector'
import { UserNav } from '@/components/user-nav'
import { NotificationsToggle } from '@/components/notifications-toggle'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <div className=" h-full">

      <header className="flex justify-between items-center px-16 py-8">
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
          <Card>
            <CardHeader>
              <CardTitle>Chart: Lead time for change</CardTitle>
              <CardDescription>7 days, 13 hours <span>16%</span></CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <div>76 User stories</div>
                <div>5 days - 14 days</div>
              </div>

              <div>
                <div>24 Bugs</div>
                <div>3 - 6 days</div>
              </div>

              <div>
                <div>Goal</div>
                <div>3 days by Dec 31 (102 days left)</div>
              </div>
              <p>Chart</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}