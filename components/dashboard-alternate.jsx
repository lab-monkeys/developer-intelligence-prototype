'use client'

import { useState } from 'react'
import { ApplicationSelector } from '@/components/application-selector'
import { DateRangeSelector } from '@/components/date-range-selector'
import { LeadTimeForChangeChart } from '@/components/lead-time-for-change/chart'
import { DeploymentFrequencyChart } from '@/components/deployment-frequency/chart'
import { ChangeFailureRateChart } from '@/components/change-failure-rate/chart'
import { MeanTimeToRecoveryChart } from '@/components/mean-time-to-recovery/chart'
import { Rocket, Clock4, XCircle, PackageCheck, TrendingDown, LayoutGrid, TableIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InfoTooltip } from '@/components/info-tooltip'

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Area, Line, Label, ReferenceLine } from 'recharts'
import { IsolatedDeploymentFrequencyChart } from '@/components/deployment-frequency/iso-chart'
import { IsolatedLeadTimeForChangeChart } from '@/components/lead-time-for-change/iso-chart'
import { IsolatedChangeFailureRateChart } from '@/components/change-failure-rate/iso-chart'
import { IsolatedMeanTimeToRecoveryChart } from '@/components/mean-time-to-recovery/iso-chart'

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


export function Dashboard({ data }) {

  const applicationsList = data.applications
  const [activeApplication, setActiveApplication] = useState(applicationsList[0].id)
  const [activeDateRange, setActiveDateRange] = useState('')

  const [dataScorecard, setDataScorecard] = useState(applicationsList[0].scorecard[0])
  const [dataDeploymentFrequency, setDataDeploymentFrequency] = useState(applicationsList[0].metrics[1].data)
  const [dataLeadTimeForChange, setDataLeadTimeForChange] = useState(applicationsList[0].metrics[2].data)
  const [dataChangeFailureRate, setDataChangeFailureRate] = useState(applicationsList[0].metrics[0].data)
  const [dataMeanTimeToRecovery, setDataMeanTimeToRecovery] = useState(applicationsList[0].metrics[3].data)

  function changeActiveApplication(id) {
    setActiveApplication(id)
    setDataScorecard(applicationsList.find((application) => application.id === id)?.scorecard[0])
    setDataDeploymentFrequency(applicationsList.find((application) => application.id === id)?.metrics[1].data)
    setDataLeadTimeForChange(applicationsList.find((application) => application.id === id)?.metrics[2].data)
    setDataChangeFailureRate(applicationsList.find((application) => application.id === id)?.metrics[0].data)
    setDataMeanTimeToRecovery(applicationsList.find((application) => application.id === id)?.metrics[3].data)
  }

  return (
    <main className="flex flex-col p-16 pt-0 min-[1921px]:px-64">
      <div className="flex items-center justify-between gap-2 py-16">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-8 h-8" />
          <h1 className="font-bold text-2xl text-foreground">Dashboard</h1>
        </div>

        <div className="flex justify-end items-center gap-4">
          <ApplicationSelector applications={applicationsList} activeApplication={activeApplication} changeActiveApplication={changeActiveApplication} />
          <DateRangeSelector activeDateRange={activeDateRange} />
        </div>
      </div>


      <Card className="flex flex-col h-64">
        <CardHeader>
          <CardTitle className="dark:text-white">Software delivery performance</CardTitle>
          <CardDescription>Summary of how your application is performing</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-6 w-full h-full items-center justify-between">
          <div className="h-full p-6 bg-blue-500 rounded-xl dark:bg-blue-500 text-white">
            <div className="relative w-full h-full"><ScorecardScore data={dataScorecard} /></div>
          </div>
          <div className="h-full p-6 bg-blue-50 rounded-xl dark:bg-blue-950"><ScorecardTrend data={dataScorecard} /></div>
          <div className="flex items-center h-full p-6 col-span-2 bg-neutral-50 rounded-xl dark:bg-neutral-900"><ScorecardAnalysis data={dataScorecard} /></div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="dark:text-white">DORA metrics</CardTitle>
          <CardDescription>Key metrics that impact software delivery performance</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="dora-df" className="">
            <TabsList className="justify-start w-full h-fit p-0 rounded-none">
              <TabsTrigger value="dora-df" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-blue-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <DeploymentFrequencyTabTrigger data={dataDeploymentFrequency} />
              </TabsTrigger>
              <TabsTrigger value="dora-ltfc" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-violet-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <LeadTimeForChangeTabTrigger data={dataLeadTimeForChange} />
              </TabsTrigger>
              <TabsTrigger value="dora-cfr" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-rose-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <ChangeFailureRateTabTrigger data={dataChangeFailureRate} />
              </TabsTrigger>
              <TabsTrigger value="dora-mttr" className="flex flex-col items-start w-full p-6 bg-neutral-50 border-0 border-l border-b border-t-2 border-t-transparent rounded-none dark:bg-neutral-900 data-[state=active]:bg-white data-[state=active]:border-b-transparent data-[state=active]:border-t-emerald-500 data-[state=active]:shadow-none data-[state=active]:dark:bg-card">
                <MeanTimeToRecoveryTabTrigger data={dataMeanTimeToRecovery} />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dora-df" className="p-6 mt-8">
              <div className="h-64">
                <IsolatedDeploymentFrequencyChart data={dataDeploymentFrequency} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  List of deployments
                </h2>
                <DeploymentFrequencyTable />
              </div>
            </TabsContent>
            <TabsContent value="dora-ltfc" className="p-6 mt-8">
              <div className="h-64">
                <IsolatedLeadTimeForChangeChart data={dataLeadTimeForChange} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  List of pull requests
                </h2>
                <LeadTimeForChangeTable />
              </div>
            </TabsContent>
            <TabsContent value="dora-cfr" className="p-6 mt-8">
              <div className="h-64">
                <IsolatedChangeFailureRateChart data={dataChangeFailureRate} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  List of deployments
                </h2>
                <ChangeFailureRateTable />
              </div>
            </TabsContent>
            <TabsContent value="dora-mttr" className="p-6 mt-8">
              <div className="h-64">
                <IsolatedMeanTimeToRecoveryChart data={dataMeanTimeToRecovery} />
              </div>
              <div className="mt-8">
                <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
                  <TableIcon />
                  List of pull requests
                </h2>
                <MeanTimeToRecoveryTable />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>


      {/* <div className="h-full grid grid-cols-2 grid-rows-2 gap-8 mt-8">
        <DeploymentFrequencyChart data={dataDeploymentFrequency} />
        <LeadTimeForChangeChart data={dataLeadTimeForChange} />
        <ChangeFailureRateChart data={dataChangeFailureRate} />
        <MeanTimeToRecoveryChart data={dataMeanTimeToRecovery} />
      </div> */}
    </main>
  )
}