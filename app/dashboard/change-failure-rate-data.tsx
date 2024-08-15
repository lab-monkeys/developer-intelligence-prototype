// app/dashboard/change-failure-rate-data.tsx
import { getDaysBetweenDates } from '@/lib/date-funcs';
import { ChangeFailureRateChart } from '@/components/change-failure-rate/chart';
import { ChangeFailureRateTable } from '@/components/change-failure-rate/table';
import { TableIcon } from 'lucide-react';

interface ChangeFailureRateData {
  issue_id: string;
  timestamp: number;
  // Add other relevant fields from your API response here
}

async function fetchChangeFailureRate(appName: string, from: Date, to: Date): Promise<ChangeFailureRateData[]> {
  const reqUrl = `${process.env.PELORUS_API_URL}/sdp/change_failure_rate/${appName}/data?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
  console.log(`CFR data Req URL: ${reqUrl}`);

  const response = await fetch(reqUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch Mean Time to Restore data");
  }

  const data: ChangeFailureRateData[] = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
}

export default async function ChangeFailureRateData({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
  const data = await fetchChangeFailureRate(appName, dateRange.from, dateRange.to);

  return (
    <>
      <div className="h-64">
        <ChangeFailureRateChart cfrData={data} />
      </div>
      <div className="mt-8">
        <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
          <TableIcon />
          Failed deployments
        </h2>
        <ChangeFailureRateTable appName={appName} cfrData={data} />
      </div>
    </>
  );
}
