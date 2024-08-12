// app/dashboard/lead-time-for-change-data.tsx
import { getDaysBetweenDates } from '@/lib/date-funcs';
import { LeadTimeForChangeChart } from '@/components/lead-time-for-change/chart';
import { LeadTimeForChangeTable } from '@/components/lead-time-for-change/table';
import { TableIcon } from 'lucide-react';

interface LeadTimeForChangeData {
  issue_id: string;
  timestamp: number;
  // Add other relevant fields from your API response here
}

async function fetchLeadTimeForChange(appName: string, from: Date, to: Date): Promise<LeadTimeForChangeData[]> {
  const reqUrl = `${process.env.PELORUS_API_URL}/sdp/lead_time_for_change/${appName}/data?range=${getDaysBetweenDates({ to, from })}d&start=${Math.floor(from.getTime() / 1000)}`;
  console.log(`LTFC Req URL: ${reqUrl}`);

  const response = await fetch(reqUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch Lead Time for Change data");
  }

  const data: LeadTimeForChangeData[] = await response.json();
  return data.sort((d1, d2) => (d1.timestamp > d2.timestamp ? 1 : d1.timestamp < d2.timestamp ? -1 : 0));
}

export default async function LeadTimeForChangeData({ appName, dateRange }: { appName: string; dateRange: { from: Date; to: Date } }) {
  const data = await fetchLeadTimeForChange(appName, dateRange.from, dateRange.to);

  return (
    <div>
      {/* Render chart and table directly here, or pass data to child components */}
      <div className="h-64">
        <LeadTimeForChangeChart data={data} />
      </div>
      <div className="mt-8">
        <h2 className="flex items-center gap-2 mb-4 font-semibold dark:text-white">
          <TableIcon />
          Pull requests
        </h2>
        <LeadTimeForChangeTable ltfcData={data} />
      </div>
    </div>
  );
}
