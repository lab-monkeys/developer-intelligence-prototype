import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card'

import { CodeRepoSelector } from '../../components/code-repo-selector'
import { UserNav } from '../../components/user-nav'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <div className="app">

      <header className="app__header">
        <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
        <h1 className="visually-hidden">Dashboard</h1>
        <UserNav />
      </header>

      <main className="app__main">

        <div className="">
          <CodeRepoSelector />
          <div>Something goes here</div>
          <div>Another thing for calendar</div>
        </div>

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

        
      </main>

      {/* Global Toolbar */}




      {/* Data visualizations */}


      {/* <div>Anomaly report</div> */}
      {/* <div>Edit goal modal</div> */}
      {/* <div>Exclude data modal</div> */}
    </div>
  )
}