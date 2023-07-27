import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata = {
  title: 'Dashboard - Red Hat Developer Intelligence'
}

export default function Page() {
  return (
    <div className="app">

      <header className="app__header">
        <Image src="/logos/logo--developer-intelligence.svg" alt="Red Hat Developer Intelligence logo" width={330} height={32} />
        <h1 className="visually-hidden">Dashboard</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
      
      <main className="app__main">
        <div className="toolbar">

          <div className="code-repo-selector">
            <h3>Code repository selector</h3>
            <div>managed-cluster-validating-webhooks</div>
            <div>
              <div>
                <div>GitHub</div>
                <div>cluster-network-operator</div>
                <div>Updated 3 days ago</div>
              </div>
              <div>
                <div>GitHub</div>
                <div>managed-cluster-validating-webhooks</div>
                <div>Updated 2 weeks ago</div>
              </div>
              <div>
                <div>GitHub</div>
                <div>microshift</div>
                <div>Updated on Mar 31</div>
              </div>
              <div>
                <div>GitHub</div>
                <div>nvidia-gpu-operator</div>
                <div>Updated 1 month ago</div>
              </div>
              <div>
                <div>GitHub</div>
                <div>project-rh-xfactor</div>
                <div>Updated on Apr 17</div>
              </div>
              <button>Customize</button>
            </div>
          </div>

          <div className="data-range-selector">Date range selector</div>

        </div>

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <div className="chart">
          <div className="chart__header">
            <h2>Chart: Lead time for change</h2>
            <div>7 days, 13 hours <span>16%</span></div>
            
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

            {/* <div>Chart options selector</div> */}
          </div>    
          <div className="chart__contents">...insert chart...</div>
        </div>
      </main>
      
      {/* Global Toolbar */}
      

      

      {/* Data visualizations */}
      

      {/* <div>Anomaly report</div> */}
      {/* <div>Edit goal modal</div> */}
      {/* <div>Exclude data modal</div> */}
    </div>
  )
}