'use client'

import { useState } from 'react'
import { ApplicationSelector } from '@/components/application-selector'
import { DateRangeSelector } from '@/components/date-range-selector'
import { LeadTimeForChangeChart } from '@/components/lead-time-for-change/chart'
import { DeploymentFrequencyChart } from '@/components/deployment-frequency/chart'
import { ChangeFailureRateChart } from '@/components/change-failure-rate/chart'
import { MeanTimeToRecoveryChart } from '@/components/mean-time-to-recovery/chart'

export function Dashboard({ data }) {

  const applicationsList = data.applications
  const [activeApplication, setActiveApplication] = useState(applicationsList[0].id)
  const [activeDateRange, setActiveDateRange] = useState('')
  
  const [dataDeploymentFrequency, setDataDeploymentFrequency] = useState(applicationsList[0].metrics[1].data)
  const [dataLeadTimeForChange, setDataLeadTimeForChange] = useState(applicationsList[0].metrics[2].data)
  const [dataChangeFailureRate, setDataChangeFailureRate] = useState(applicationsList[0].metrics[0].data)
  const [dataMeanTimeToRecovery, setDataMeanTimeToRecovery] = useState(applicationsList[0].metrics[3].data)

  function changeActiveApplication(id) {
    setActiveApplication(id)
    setDataDeploymentFrequency(applicationsList.find((application) => application.id === id)?.metrics[1].data)
    setDataLeadTimeForChange(applicationsList.find((application) => application.id === id)?.metrics[2].data)
    setDataChangeFailureRate(applicationsList.find((application) => application.id === id)?.metrics[0].data)
    setDataMeanTimeToRecovery(applicationsList.find((application) => application.id === id)?.metrics[3].data)
  }

  return (
    <main className="flex flex-col h-full p-16 pt-0">
      <div className="flex justify-between items-center">
        <ApplicationSelector applications={applicationsList} activeApplication={activeApplication} changeActiveApplication={changeActiveApplication} />
        <DateRangeSelector activeDateRange={activeDateRange} />
      </div>

      <div className="h-full grid grid-cols-2 grid-rows-2 gap-8 mt-8">
        <DeploymentFrequencyChart data={dataDeploymentFrequency} />
        <LeadTimeForChangeChart data={dataLeadTimeForChange} />
        <ChangeFailureRateChart data={dataChangeFailureRate} />
        <MeanTimeToRecoveryChart data={dataMeanTimeToRecovery} />
      </div>
    </main>
  )
}