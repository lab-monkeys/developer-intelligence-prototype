// app/dashboard/deployment-frequency-data.tsx
import { getDaysBetweenDates } from '@/lib/date-funcs';
import { DeploymentFrequencyChart } from '@/components/deployment-frequency/chart';
import { DeploymentFrequencyTable } from '@/components/deployment-frequency/table';
import { TableIcon } from 'lucide-react';

interface DeploymentFrequencyData {
  issue_id: string;
  timestamp: number;
  // Add other relevant fields from your API response here
}

async function fetchDeploymentFrequency(appName: string, from: Date, to: Date): Promise<DeploymentFrequencyData[]> {
  const reqUrl = `${process.env.PELORUS_API_URL}/sdp/deployment_frequency/${appName}/data?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
  console.log(`df Req URL: ${reqUrl}`);

  const response = await fetch(reqUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch Lead Time for Change data");
  }

  const data: DeploymentFrequencyData[] = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
}

export default async function DeploymentFrequencyData({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
  const data = await fetchDeploymentFrequency(appName, dateRange.from, dateRange.to);

  return (
    <>
      <div className="h-64">
        <DeploymentFrequencyChart dfData={data} />
      </div>
      <div className="mt-8">
        <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
          <TableIcon />
          Deployments
        </h2>
        <DeploymentFrequencyTable dfData={data} />
      </div>
    </>
  );
}
