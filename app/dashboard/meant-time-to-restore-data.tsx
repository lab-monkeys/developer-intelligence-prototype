// app/dashboard/mean-time-to-restore-data.tsx
import { getDaysBetweenDates } from '@/lib/date-funcs';
import { MeanTimeToRestoreChart } from '@/components/mean-time-to-restore/chart';
import { MeanTimeToRestoreTable } from '@/components/mean-time-to-restore/table';
import { TableIcon } from 'lucide-react';

interface MeanTimeToRestoreData {
  issue_id: string;
  timestamp: number;
  // Add other relevant fields from your API response here
}

async function fetchMeanTimeToRestore(appName: string, from: Date, to: Date): Promise<MeanTimeToRestoreData[]> {
  const reqUrl = `${process.env.PELORUS_API_URL}/sdp/mean_time_to_restore/${appName}/data?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(to.getTime() / 1000)}`;
  console.log(`MTTR data Req URL: ${reqUrl}`);

  const response = await fetch(reqUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch Mean Time to Restore data");
  }

  const data: MeanTimeToRestoreData[] = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
}

export default async function MeanTimeToRestoreData({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
  const data = await fetchMeanTimeToRestore(appName, dateRange.from, dateRange.to);

  return (
    <>
      <div className="h-64">
        <MeanTimeToRestoreChart mttrData={data} />
      </div>
      <div className="mt-8">
        <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
          <TableIcon />
          Pull requests
        </h2>
        <MeanTimeToRestoreTable appName={appName} mttrData={data} />
      </div>
    </>
  );
}
