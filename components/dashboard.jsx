import { subDays } from "date-fns"
import { AppSelector } from '@/components/app-selector'
import { DateRangeSelector } from '@/components/date-range-selector'
import { LayoutGrid, TableIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DeploymentFrequencyChart } from '@/components/deployment-frequency/chart'
import { LeadTimeForChangeChart } from '@/components/lead-time-for-change/chart'
import { ChangeFailureRateChart } from '@/components/change-failure-rate/chart'
import { MeanTimeToRecoveryChart } from '@/components/mean-time-to-recovery/chart'

import { DeploymentFrequencyTabTrigger } from './deployment-frequency/tab-trigger'
import { ChangeFailureRateTabTrigger } from './change-failure-rate/tab-trigger'
import { LeadTimeForChangeTabTrigger } from './lead-time-for-change/tab-trigger'

import { DeploymentFrequencyTable } from './deployment-frequency/table'
import { LeadTimeForChangeTable } from './lead-time-for-change/table'
import { ChangeFailureRateTable } from './change-failure-rate/table'
import { MeanTimeToRecoveryTable } from './mean-time-to-recovery/table'

import { ScorecardScore } from './scorecard/score'
import { ScorecardAnalysis } from './scorecard/analysis'
import { ScorecardTrend } from './scorecard/trend'
import { MeanTimeToRecoveryTabTrigger } from './mean-time-to-recovery/tab-trigger'

import LeadTimeForChangeData from '@/app/dashboard/lead-time-for-change-data';

export function Dashboard({ appList, searchParams }) {

  const activeApp = appList[0].app

  const defaultDaysAgo = 7;
  const initialDateRange = {
    from: subDays(new Date(), defaultDaysAgo),
    to: new Date(),
  };

  const dateRange = {
    from: new Date(searchParams?.from || initialDateRange.from),
    to: new Date(searchParams?.to || initialDateRange.to),
  };

  // const [activeApplication, setActiveApplication] = useState(applicationsList[0].id)
  // const [dataScorecard, setDataScorecard] = useState(applicationsList[0].scorecard[0])
  // const [dataDeploymentFrequency, setDataDeploymentFrequency] = useState(applicationsList[0].metrics[1].data)
  // const [dataMeanTimeToRecovery, setDataMeanTimeToRecovery] = useState(applicationsList[0].metrics[3].data)

  // function changeActiveApplication(id) {
  //   setActiveApplication(id)
  //   setDataScorecard(applicationsList.find((application) => application.id === id)?.scorecard[0])
  //   setDataDeploymentFrequency(applicationsList.find((application) => application.id === id)?.metrics[1].data)
  //   setDataLeadTimeForChange(applicationsList.find((application) => application.id === id)?.metrics[2].data)
  //   setDataChangeFailureRate(applicationsList.find((application) => application.id === id)?.metrics[0].data)
  //   setDataMeanTimeToRecovery(applicationsList.find((application) => application.id === id)?.metrics[3].data)
  // }

  return (
    <main className="flex flex-col p-16 pt-0 min-[1921px]:px-64">
      <div className="flex items-center justify-between gap-2 py-16">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-8 h-8" />
          <h1 className="font-bold text-2xl text-foreground">{activeApp} Dashboard</h1>
        </div>

        <div className="flex justify-end items-center gap-4">
          <AppSelector appList={appList} activeApp={activeApp} />
          <DateRangeSelector dateRange={dateRange} />
        </div>
      </div>


      {/* <Card className="flex flex-col min-h-64">
        <CardHeader>
          <CardTitle className="dark:text-white">Software delivery performance</CardTitle>
          <CardDescription>Summary of how your application is performing</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-6 w-full h-full items-center justify-between">
          <div className="h-full p-6 bg-blue-500 rounded-xl dark:bg-blue-500 text-white">
            <div className="relative w-full h-full"><ScorecardScore /></div>
          </div>
          <div className="h-full p-6 bg-blue-50 rounded-xl dark:bg-blue-950/50"><ScorecardTrend /></div>
          <div className="flex items-center h-full p-6 col-span-2 bg-neutral-50 rounded-xl dark:bg-neutral-900"><ScorecardAnalysis /></div>
        </CardContent>
      </Card> */}

      {/* <Card className="mt-8">
        <CardHeader>
          <CardTitle className="dark:text-white">DORA metrics</CardTitle>
          <CardDescription>Key metrics that impact software delivery performance</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="dora-ltfc" className="">
            <TabsList className="justify-start w-full h-fit p-0 rounded-none">
              <TabsTrigger value="dora-ltfc" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-violet-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <LeadTimeForChangeTabTrigger dateRange={dateRange} appName={activeApp} />
              </TabsTrigger>
              <TabsTrigger value="dora-df" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-blue-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <DeploymentFrequencyTabTrigger dateRange={dateRange} appName={activeApp} />
              </TabsTrigger>
              <TabsTrigger value="dora-mttr" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-emerald-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <MeanTimeToRecoveryTabTrigger dateRange={dateRange} appName={activeApp} />
              </TabsTrigger>
              <TabsTrigger value="dora-cfr" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-rose-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <ChangeFailureRateTabTrigger dateRange={dateRange} appName={activeApp} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dora-df" className="p-6 mt-8">
              <div className="h-64">
                <DeploymentFrequencyChart dateRange={dateRange} appName={activeApp} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  Deployments
                </h2>
                <DeploymentFrequencyTable dateRange={dateRange} appName={activeApp} />
              </div>
            </TabsContent>
            <TabsContent value="dora-ltfc" className="p-6 mt-8">
              <LeadTimeForChangeData appName={activeApp} dateRange={dateRange} />
            </TabsContent>
            <TabsContent value="dora-cfr" className="p-6 mt-8">
              <div className="h-64">
                <ChangeFailureRateChart dateRange={dateRange} appName={activeApp} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  Failed deployments
                </h2>
                <ChangeFailureRateTable cfrData={dataChangeFailureRate} appName={activeApp} />
              </div>
            </TabsContent>
            <TabsContent value="dora-mttr" className="p-6 mt-8">
              <div className="h-64">
                <MeanTimeToRecoveryChart dateRange={dateRange} appName={activeApp} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  Pull requests
                </h2>
                <MeanTimeToRecoveryTable dateRange={dateRange} appName={activeApp} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card> */}
    </main>
  )
}